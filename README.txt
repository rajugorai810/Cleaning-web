

<====== 21 Mar 2024 ======>

(1)=> Project setup

    We are gonna use "Shadcn/ui" library => https://ui.shadcn.com/

(2)=> install shadcn library: npx shadcn-ui@latest init

    On installing shadcn , a folder "Component" is automatically created;
    Whenever we want to use any component like button etc , we have to install it and it will install inside this folder;

(3) Add Header

    For that we created folder inside app with underscore ,like '_components';
    This is done to tell nextjs that this folder and item inside it will not going to act as routes.

    Inside "_component" folder , we created 'Header.jsx';

    call it inside layout.jsx , so that it can be fixed at other pages also.

** PROBLEM: We have to define text color every time;
==>SOLUTION: Go to 'tailwind.config.js' => extended => color => primary => Default
    => Change the default color


<<======= 22 Mar 2024 =========>> 


(4) Add Hero section 
    -contains searchbar 

(5) Hygraph setup for database

install graphql : npm i graphql-request graphql

create a folder in app i.e.  '_services' and inside this we fetch gql request in "GlobalApi.js".
    getCategory=> fetch all service category;

(6) create "CategoryList.jsx" inside "_component", and add to 'page.js';
    fetch category list in 'page.js'
    Since we use "UseEffect" hooks inside "page.js" , we have to do it client side by writing "use-client" on top.
    Store the fetched data in "categoryList" using useState.
    Pass to <CategoryList /> as props

    ERROR: While iterating the list, and using icon image, there is error "media.graphasset.com is not under images"
    SOLUTION=> Whenever we use any third-party url inside next js, we have to add the domain name into "next.config.js".
    > Go to "next.config.mjs" => images=> domains=> add the domain.


    add skeleton effect at "CategoryList.jsx";


(7) List All Business
    Add API endpoints "GetAllBusinessList" to "GlobalApi.js"
    fetch it in 'page.js' using UseEffect
    store it in "businessList" using useState
    Create new file "BusinessList.jsx" in "_components"
    pass the data "businessList" from "page.js" to "BusinessList.jsx" as props
    render all the business list and add skeleton effect with condition.

(8) Authentication

    For Authentication , we are useing Clerk Authentication
    


<========23 Mar 2024 =========>


(9) Business by Category

    We created folder '(routes)'
    This folder doesn't act as route but folder inside this acts as route.

    (routes) => search => layout.jsx  


    Dynamic Routing : for dynamic routing, folder created as "[foldername]";

    We want dynamic routing like this => /search/cleaning , /search/repair, /search/plumbing etc.
    So, we created dynamic folder "[category]" inside "search" folder so that '/search' can be common.


**BUG : So there was a bug, i.e. during sign in page, the header also shown, 
FIX => To hide that , we make a new layout inside '(routes)' and move the 'page.js' from '/app' to '/app/(route)/';


for search with category, we make another layout for this.

First we design sidebar 
 and then Link the different category inside 'CategoryList.jsx' and href to {"/search/"+category.name}.
 In this way the dynamic routing works.

Now ,on clicking any category, it refer to "/search/category".

Same we can we inside the Categorysidebar.

In order to get the category name, params fetch that as [category].

Now we get the name, we can fetch list from Hygraph.

And implement it.


(10) Business Details Screen

For business details , here we also use dynamic routing.

Inside (routes), create folder 'details';
For dynamic routing , [businessId] created.

Design Business details Screen


<====== 24 Mar 2024 ==========>

(11) Booking service

    On click book appointment, a sidebar is shown.
     We are implementing it using component of "Shadcn" named "Sheet".
     Install it and implement inside "SuggestedBusiness.jsx" bcz in this section "Book Appointment" Button exist.

     Add Calender from shadcn

     Add Time Slot 

     On click book , booking service done using mutation query.

    (12) Disable Booked Slot for other user :
        Implement to diable the already booked time slot.
        For that ,inside UseEffect , setDate empty and setslectedTime empty.


    (13) User Booking page
        Add tabs from shadcn inside mybooking -> page.jsx
        Two tabs - Booking and Completed
        For each tab , we require api endpoints.
        
    

