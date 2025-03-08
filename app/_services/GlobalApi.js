const { gql, default: request } = require("graphql-request");
 
const MASTER_URL="https://api-ap-south-1.hygraph.com/v2/cltz72ju10gv107w6aignyzx1/master";

const getCategory = async ()=>{
    const query= gql`
    query GetCategory {
        categories {
          id
          name
          icon {
            url
          }
          bgcolor {
            hex
          }
        }
      }      
    `

    const result = await request(MASTER_URL, query);
    return result;
} 

const getAllBusinessList= async()=>{
  const query = gql`
  query GetAllBusinessList {
    businessLists {
      id
      name
      email
      contactPerson
      category {
        name
      }
      address
      about
      images {
        url
      }
    }
  }
  `

  const result = await request(MASTER_URL, query);
  return result;
}

const getBusinessByCategory = async (category)=>{
  const query = gql`
  query MyQuery {
    businessLists(where: {category: {name: "`+category+`"}}) {
      about
      address
      category {
        id
        name
      }
      contactPerson
      email
      id
      name
      images {
        url
      }
    }
  }  
  `
  const result = await request(MASTER_URL, query);
  return result;
} 

const getBusinessById = async (id)=>{
  const query = gql`
  query GetBusinessById {
    businessList(where: {id: "`+id+`"}) {
      about
      address
      category {
        name
        icon {
          url
        }
      }
      contactPerson
      email
      id
      name
      images {
        url
      }
      description {
        html
      }
    }
  }
  `

  const result = await request(MASTER_URL, query);
  return result;
}

const createNewBooking = async (businessId, date, time ,userEmail, userName)=>{
  const mutationQuery = gql`
  mutation createBooking {
    createBooking(
      data: {bookingStatus: Booked, businessList: {connect: {id: "`+businessId+`"}}, date: "`+date+`", time: "`+time+`", userEmail: "`+userEmail+`", userName: "`+userName+`"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  `

  const result = await request(MASTER_URL, mutationQuery);
  return result;
}

const businessBookedSlot = async (businessId, date)=>{
  const query = gql`
  query BusinessBookedSlot {
    bookings(where: {businessList: {id: "`+businessId+`"}, date: "`+date+`"}) {
      date
      time
    }
  }  
  `

  const result = await request(MASTER_URL, query);
  return result;
}

const getUserBookingHistory = async (userEmail)=>{
  const query = gql`query GetUserBookingHistiry {
    bookings(
      where: {userEmail: "`+userEmail+`"}
      orderBy: publishedAt_DESC
    ) {
      businessList {
        address
        contactPerson
        name
        images {
          url
        }
      }
      date
      time
    }
  }
  `

  const result = await request(MASTER_URL, query);
  return result;
}

export default{
    getCategory,
    getAllBusinessList,
    getBusinessByCategory,
    getBusinessById,
    createNewBooking,
    businessBookedSlot,
    getUserBookingHistory
}
