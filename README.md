NextJS
-----------------------------------------------------------------

    is a SinglePageApplication development framework based on react and react-router frameworks.

    Single Page Application

        is an application that only one html page. (mostly named as index.html)

        the entire application is written in javascript and the application
        along with the index page is brought down into the client on the first request.

        NextJS supports three different dynamic content generation techniques, and the developer
        can choose one among them for each request.

        Dynamic content generatifon is to generate the html on the go, and the three techniques are
            (a) Client Side Rendering
                    is to generate html dynamically on the client machine and the generated content
                    replaces the content of the index.html file.

            (b) Server Side Rendering
                    is to generate html dynamically on the server and the generated html snippet is then
                    sent to the client and on the client the index page content is repalced with the content
                    from the server.

            (c) Static Site Generation
                    is to generate html content statically at the compile time or build time
                    and use those content as and when needed.

    Component

        is a building-unit for a SPA. Each component is a custom html-element
        that is isolated and reusable. 

        is any javascript function that returns html dom.

        const Dashboard = () => (
            <div>
                <p>This is a dashboard.</p>
            </div>
        );

        <Dashboard />

    JSX / TSX

        is a extended javascript or typescript to minimize html dom manipulation code. 
        JSX - JavaScript eXtended Markup Language
        TSX - TypeScript eXtended Markup Language

        where html can be emded into javascitp or typescript without any special symbols.

        JSX/TSX Rules
        (1) JSX or TSX is case sensitive.
            all the html elements are expected to be lower in case.
            the components msut have TitleCase.

        (2) A component can return only one html element.

            const Dashboard = () => (       //gives an error
                <div>
                    <p>This is a dashboard.</p>
                </div>
                <section>
                </section>
            );
            
            const Dashboard = () => (       //gives no error
                <div>
                    <div>
                        <p>This is a dashboard.</p>
                    </div>
                    <section>
                    </section>
                </div>
            );
        
        (3) the 'class' attribute is forbidden, 'className' attribute is used instead.

        (4) '{}' are sued to interpolate javascript code inside html.

            <p> Hello {userName} </p>

            <p> Hello {userName.toUpperCase()} </p>

    'props' or properties

        is an object that carries data from a parent component to a child component through
        attributes.

        /*const MessageBox =(props) => (
            <div style={props.type==="error"?"color:red":"color:blue"}>
                <p> {props.message} </p>
                <button type="button"> OK </button>
            </div>
        );*/

        const MessageBox =({message,type}) => (
            <div style={type==="error"?"color:red":"color:blue"}>
                <p> {message} </p>
                <button type="button"> OK </button>
            </div>
        );

        const Dashboard = () => (
            <section>
                <h3>Dashbaord </h3>

                <MessageBox message="Hello! Welcome!" type="info" />
                <MessageBox message="Sorry! Unable to laod data" type="error" />
            </section>
        );

    NextJS Project Structure

        project-root
            |
            |- public               will hold static assets like images, videos, audios ..etc.,
            |- src
                |- app              will render app-routing (*.tsx / *.jsx)
                |- pages            will render pages-routing (*.ts / *.js)
                |- libs             will hold all services or reusable logic (*.js/*.ts)
                |- components       will hold resuable components (*.tsx / *.jsx)

    Creating a simple nextjs app

        npx create-next-app

    NextJS supports two types of routers

        A router will map a url-segment with a component. As and when that url-segment
        is requested, the mapped component is rendered (appears).

        Pages Router is a little earlier than App Router, that means App Router
        is modern and supports more features. For all new nextjs app
        app-router is recommended.

        Features            AppRouter               PagesRouter
        ----------------------------------------------------------        
        Components          By default              By Default
                            Server Components       Client Components

                            "use server" and "use client" instructions can change
                            the default behaviour of a component

        Layout              Layouts can be          Layouts are static
                            nested and dynamic

        Priority            App router has higher   PagesRouter has the 
                            priority                fallback priority.
        
        File-based          Folders are             Files are directly mapped
        routing             mapped as routes        as routes.

                            assuming we are building a hr app
                            assuming the server is running on 3000 port number

                            src
                            |- app
                            |   |- layout.tsx       works as a layout to all the components in the app
                            |   |- page.tsx         http://localhost:3000/
                            |   |- depts
                            |   |   |-page.tsx      http://localhost:3000/depts
                            |   |   |-search
                            |   |   |   |-page.tsx  http://localhost:3000/depts/search
                            |   |- emps
                            |   |   |-page.tsx      http://localhost:3000/emps
                            |   |
                            |   |- api
                            |   |   |-route.ts      will be a rest api responding to http://localhost:3000/api
                            |   |   |-depts
                            |   |   |   |-route.ts  will be a rest api responding to http://localhost:3000/api/depts
                            |   |   |-emps
                            |   |   |   |-route.ts  will be a rest api responding to http://localhost:3000/api/emps
                            |
                            |- pages
                            |   |-home.tsx          http://localhost:3000/home
                            |   |-about.tsx         http://localhost:3000/about
                            |   |
                            |   |-api
                            |   |   |-titles.ts   will be a rest api responding to http://localhost:3000/api/titles
                            |   |   |-desgs.ts   will be a rest api responding to http://localhost:3000/api/desgs

    App Router Folder Naming Conventions

    1. folderName           is mapped to a route segment
        
        app
         |- depts
              |-page.tsx      http://localhost:3000/depts
                            
    2. [folderName]         is ampped to a url-parameter

        app
         |- welcome
                |-[userName]
                    |-page.tsx      http://localhost:3000/welcome/vamsy
                                    http://localhost:3000/welcome/suresh
                                    http://localhost:3000/welcome/murhty
                                    ...etc.,
    
    3. [...folderName]       is ampped to a list of url-parameter

        app
         |- welcome
                |-[[userName]]
                    |-page.tsx      http://localhost:3000/welcome/vamsy
                                    http://localhost:3000/welcome/suresh/vamsy
                                    http://localhost:3000/welcome/murthy/vamsy/suresh
                                    ...etc.,

    4. [[...folderName]]      is ampped to a optional list of url-parameters

        app
         |- welcome
                |-[[...userName]]
                    |-page.tsx      http://localhost:3000/welcome
                                    http://localhost:3000/welcome/vamsy
                                    http://localhost:3000/welcome/vamsy/murthy
                                    http://localhost:3000/welcome/vamsy/murthy/suresh
                                    ...etc.,
    
    5. _folderName           is not mapped to any route or url, it is consedered as a private folder

    6. (folderName)          is not mapped to any route or url, it is used to group urls for organized pattern.

        app
         |- (adminRoutes)
         |      |-addUser
         |      |   |-page.tsx      http://localhost:3000/addUser
         |      |-userList
         |      |   |-page.tsx      http://localhost:3000/usersList
         |
         |- (consumerRoutes)
         |      |-addOrder
         |      |   |-page.tsx      http://localhost:3000/addOrder
         |      |-invoicesList
         |      |   |-page.tsx      http://localhost:3000/invoiceList
         |
         |- (employeeRoutes)
         |      |-addProduct
         |      |   |-page.tsx      http://localhost:3000/addProduct
         |      |-inventory
         |      |   |-page.tsx      http://localhost:3000/inventory
    
    Integrating Bootstrap On NextJS

        Bootstrap is a responsive web design library
        Bootstrap-Icons is a resposnive bootstrap friendly icon library.

        npm i bootstrap bootstrap-icons

        import the css and js files from bootstrap and bootstrap0icons in the layout.tsx file.
    
    Component LifeCycle Hooks

        A hook is a function that adds feature to a component.
        Life Cycle hooks work only on a client side componnets.

        useState        this hook creates a reader and writer to a field.
                        this hook accepts an initial value to the field.
                        every time the field is written with a new value, 
                        the component is re-rendered.

                        let [x,setX] = useState<number>(0);

        useEffect       this hook is used to execute a piece of task (side-effect)
                            (a) everytime after a render happens

                                    useEffect(() => {
                                        /* this callback is executed everytime a render happens.
                                            do not call any setField method here becasue , it triggers 
                                            infinite iterative execution.
                                            if calling a setField is invitable, then call it conditonally
                                        */
                                    });

                            (b) once after the first render
                                    useEffect(() => {
                                        /* this callback is executed only once after the first
                                            render happens.                                    
                                        */
                                    },[]);

                            (c) everytime after one or more fields are modified

                                    useEffect(() => {
                                        /* this callback is executed once one or more fields in the dependency 
                                            array are modifed after render happens.
                                            do not call any setField method here becasue , it triggers 
                                            infinite iterative execution.
                                            if calling a setField is invitable, then call it conditonally
                                        */
                                    },[field1,field2,...]);

    Creating Rest Api in NextJS

        NextReqeust inherits from WebReqeustApi
            Read or Write Cookies
                request.cookies.getAll()
                request.cookies.get(cookieName)
                request.cookies.delete(cookieName)
                request.cookies.set(cookieName,cookeiValue)

            Read Url Data
                request.nextUrl.basePath            gives the context-root
                request.nextUrl.pathname            gives current path
                request.nextUrl.searchParams        gives queryString

            request.header
            reqeust.method
            request.redirect
            request.formData()
            request.json()      return a promsie to extract request body.
            
        NextResponse

            NextResponse.json({},{status:200})   produce a response object with the givne json-object as resp body
            NextResponse.redirect(url)
            
            let response = NextResponse.next()  //produce a response object 

                response.cookies.getAll()
                response.cookies.get(cookieName)
                response.cookies.delete(cookieName)
                response.cookies.set(cookieName,cookeiValue)

    Axios Library

        is used to consume rest api from a client component.

        axios
            |- get(url) : Promise
            |- post(url,reqBody) : Promise
            |- put(url,reqBody) : Promise
            |- delete(url) : Promise

        npm i axios

    
    useForm Hook

        npm i react-hook-form

        const {
            register,
            handleSubmit,
            formState: { errors },
        } = useForm<ModelType>();

        const onSubmit = handleSubmit((data) => console.log(data))

        <form onSubmit={onSubmit}>
            <input {...register("fieldName",{ required:true })} placeholder="Bill" />
            {errors.fieldName && <p>This is a mandatory field</p>}

            <button>SAVE</button>
        </form>

    Server Actions

        an asynchronous function marked as 'use server' in the first line
        of the function implementation.

        these are used to execute any task on the server and can be invoked from
        any form action or form element events or from useEffect from client components.

        these are introduced as an experitmental feature in nextjs 13 and are
        fully available in nextjs14.

        async function save(contact:Contact) {
            'use server'

            await addContact(contact);
            redirect("/contacts");
        }
