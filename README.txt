

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


(4) Add Hero section 
    -contains searchbar 