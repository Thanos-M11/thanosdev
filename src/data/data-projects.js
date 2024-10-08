export const projects = [
  {
    id: "PJ008",
    show: true,
    title: "Invoice app, Mobile version, with Angular, NgRx Store and RxJS",
    description:
      "This is an IN-PROGRESS... project. A potential solution to the Invoice app premium challenge on Frontend Mentors.",
    mainTechnology: "Typescript, Angular",
    github: "https://github.com/Thanos-M11/invoice",
    attribute: {
      link: "https://www.frontendmentor.io/challenges/invoice-app-i7KaLTQjl",
      description:
        "Part of the solution to the Invoice app premium challenge on Frontend Mentor.",
    },
    url: "https://invoice-angular-62193.web.app/",
    features: [
      "Read and delete invoices",
      "Filter invoices by status (draft/pending/paid)",
      "View the mobile layout",
      "View the optimal layout for the app depending on their device's screen size",
      "Create and update invoices",
      "Receive form validations when trying to create/edit an invoice",
      "Save draft invoices, and mark pending invoices as paid",
      "Toggle light and dark mode",
    ],
    techStack: {
      language: ["Typescript", "HTML", "CSS"],
      framework: "Angular",
      styling: "CSS, Flex, Grid",
    },
    images: [
      {
        imgFile: "invoice/mobile-invoice-list.png",
        imgAlt: "invoice list",
        imgComments: "",
      },
      {
        imgFile: "invoice/mobile-invoice-paid-details.png",
        imgAlt: "invoice details with status paid",
        imgComments: "",
      },
      {
        imgFile: "invoice/mobile-invoice-pending-details.png",
        imgAlt: "invoice details with status pending",
        imgComments: "",
      },
      {
        imgFile: "invoice/mobile-invoice-list-filter-off.png",
        imgAlt: "no invoices icon",
        imgComments: "",
      },
      {
        imgFile: "invoice/mobile-filter-pending-off.png",
        imgAlt: "invoice list without status pending",
        imgComments: "",
      },
      {
        imgFile: "invoice/mobile-filter-pending-on.png",
        imgAlt: "invoice list with status pending",
        imgComments: "",
      },

      {
        imgFile: "invoice/code-app-config.png",
        imgAlt: "app configuration file",
        imgComments: "app.config.ts",
      },
      {
        imgFile: "invoice/code-filter-component.png",
        imgAlt: "filter component",
        imgComments:
          "Filter component with two observables, and a reactive form approach.  A FormGroup with a FormArray 'filter' property of type FormControl boolean. ",
      },
      {
        imgFile: "invoice/code-invoice-filter-html.png",
        imgAlt: "filter html",
        imgComments: "Filter html",
      },
      {
        imgFile: "invoice/code-filter-styles.png",
        imgAlt: "filter styles",
        imgComments: "Filter styles",
      },
      {
        imgFile: "invoice/code-invoice-item-html.png",
        imgAlt: "invoice item html",
        imgComments: "Invoice Item html",
      },
      {
        imgFile: "invoice/code-pipes.png",
        imgAlt: "pipes",
        imgComments: "Invoice pipes, for transforming values",
      },
      {
        imgFile: "invoice/code-store-actions.png",
        imgAlt: "store actions",
        imgComments: "Store Actions",
      },
      {
        imgFile: "invoice/code-store-reducer.png",
        imgAlt: "store reducer",
        imgComments: "Store reducer",
      },
      {
        imgFile: "invoice/code-store-selectors.png",
        imgAlt: "store selectors",
        imgComments: "Store Selectors",
      },
      {
        imgFile: "invoice/code-services.png",
        imgAlt: "invoice services",
        imgComments: "Invoice Services",
      },
    ],
  },
  {
    id: "PJ007",
    show: true,
    title: "Job Listing with Typescript OOP approach, Responsive",
    description:
      "This is a solution to the Job listing challenge on Frontend Mentor. It is presented in two versions: one in pure Typescript in OOP approach and one with Angular @18.",
    mainTechnology: "Typescript",
    github: "https://github.com/Thanos-M11/job-listing-typescript",
    attribute: {
      link: "https://www.frontendmentor.io/solutions/responsive-job-listing-in-typescript-oop-approach-TnlDT858ad",
      description:
        "This is a solution to the Job listing challenge on Frontend Mentor.",
    },
    url: "https://job-listing-angular.web.app/",
    features: [
      "View the optimal layout for the site depending on their device's screen size",
      "See hover states for all interactive elements on the page",
      "Filter job listings based on the categories",
    ],
    techStack: {
      language: ["Typescript", "HTML", "CSS"],
      framework: "Angular",
      styling: "Modular CSS, Flex, Grid",
    },
    images: [
      {
        imgFile: "job-listing/desktop-with-filter.png",
        imgAlt: "job list with filters",
        imgComments: "desktop view",
      },
      {
        imgFile: "job-listing/mobile-with-filter.png",
        imgAlt: "job list with filters",
        imgComments: "responsive view",
      },
      {
        imgFile: "job-listing/app_file.png",
        imgAlt: "the main app file",
        imgComments: "Creating new components from the app.ts",
      },
      {
        imgFile: "job-listing/singleton_pattern01.png",
        imgAlt: "typescript code of a singleton pattern",
        imgComments:
          "Singleton design pattern for filter state management, page1",
      },
      {
        imgFile: "job-listing/singleton_pattern02.png",
        imgAlt: "typescript code of a singleton pattern",
        imgComments: "Singleton design pattern page2",
      },
      {
        imgFile: "job-listing/abstract_class.png",
        imgAlt: "typescript code of an abstract class",
        imgComments: "A generic abstract class for Components",
      },
    ],
  },

  {
    id: "PJ006",
    show: true,
    title: "Rest Countries API, React, Modular CSS, Responsive",
    description:
      "This is a solution to the REST Countries API with color theme switcher challenge on Frontend Mentor.",
    mainTechnology: "React",
    github: "https://github.com/Thanos-M11/rest-countries",
    attribute: {
      link: "https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca",
      description:
        "This is a solution to the REST Countries API with color theme switcher challenge on Frontend Mentor.",
    },
    url: "https://rest-countries-api-thanosdev.netlify.app",
    features: [
      "See all countries from the API on the homepage",
      "Search for a country using an input field",
      "Filter countries by region",
      "Click on a country to see more detailed information on a separate page",
      "Click through to the border countries on the detail page",
      "Toggle the color scheme between light and dark mode (optional)",
    ],
    techStack: {
      language: ["Javascript", "HTML", "CSS"],
      libraries: "React",
      externalApis: "https://restcountries.com/",
      routing: "React Router",
      styling: "Modular CSS, Flex, Grid",
      uiStateManagement: "Context API, React-Router",
    },
    images: [
      {
        imgFile: "restCountries/desktopDetails.png",
        imgAlt: "",
        imgComments: "",
      },
      {
        imgFile: "restCountries/desktopFull.png",
        imgAlt: "",
        imgComments: "",
      },
      {
        imgFile: "restCountries/desktopSearch.png",
        imgAlt: "",
        imgComments: "",
      },
      {
        imgFile: "restCountries/desktopSearchRegion.png",
        imgAlt: "",
        imgComments: "",
      },
      {
        imgFile: "restCountries/mobileFull.png",
        imgAlt: "",
        imgComments: "",
      },
      {
        imgFile: "restCountries/mobileDetails.png",
        imgAlt: "",
        imgComments: "",
      },
    ],
  },

  {
    id: "PJ000",
    show: true,
    title: "Fast React Pizza",
    description:
      "An ordering pizza online application where the user selects from a menu items with the ability to add the items on a cart, change their quantity and place the order with or without priority",
    mainTechnology: "React",
    github: "https://github.com/Thanos-M11/react-pizza",
    attribute: {
      link: "https://www.udemy.com/user/jonasschmedtmann/",
      description:
        "A project of Ultimate React Course 2024 instructed by Jonas Schmedtmann.",
    },
    url: "",
    features: [
      "simple application: users can order one or more pizzas from a menu",
      "requires no user accounts: users just input their names",
      "pizza menu can change: it is loaded from an API",
      "cart: users can add multiple pizzas to a cart before ordering",
      "ordering: requires just the user's name, phone number and address",
      "location: if possible a GPS location should be provided to make delivery easier",
      "order priority: users can give their order 'priority' with an extra 20% charge",
      "orders: are made by sending a POST request with the order data to the API",
      "payments: made on delivery, no payment is necessary in the app",
    ],
    techStack: {
      language: ["Javascript", "HTML", "CSS"],
      libraries: "React",
      externalApis: "https://react-fast-pizza-api.onrender.com/api/menu",
      routing: "React Router",
      styling: "Tailwindcss",
      remoteStateManagement: "React Router (v6.4) (render-as-you-fetch)",
      uiStateManagement: "Redux",
    },
    images: [
      {
        imgFile: "pizza/pizza-homepage.png",
        imgAlt: "homepage",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-menu.png",
        imgAlt: "initial menu",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-order.png",
        imgAlt: "order view",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-orderComplete.png",
        imgAlt: "order complete view",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-deliveryAddress.png",
        imgAlt: "delivery address view",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-codeApp.png",
        imgAlt: "code App",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-codeAPIgeocoding.png",
        imgAlt: "code API geocoding",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-codeAPIrestaurant.png",
        imgAlt: "code API restaurant",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-codeCartComponent.png",
        imgAlt: "code cart component",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-codeCartItem.png",
        imgAlt: "code cart item component",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-codeCreateOrder.png",
        imgAlt: "code create order",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-codeGetOrder.png",
        imgAlt: "code get order",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-codeUpdateOrder.png",
        imgAlt: "code update order",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-codeHelpers.png",
        imgAlt: "code helpers functions",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-codeUserSlice.png",
        imgAlt: "code users slice",
        imgComments: "",
      },
      {
        imgFile: "pizza/pizza-codeUserSlice2.png",
        imgAlt: "code users slice 2",
        imgComments: "",
      },
    ],
  },

  {
    id: "PJ001",
    show: true,
    title: "Wild Oasis",
    description:
      "A room booking application where users are hotel employees with the ability to check in and out guests through a dashboard with statistics and metrics. Login credentials: test@test.com, pass1234",
    mainTechnology: "React",
    github: "https://github.com/Thanos-M11/the-wild-oasis",
    url: "https://the-wild-oasis-thanosmk.netlify.app/",
    attribute: {
      link: "https://www.udemy.com/user/jonasschmedtmann/",
      description:
        "A project of Ultimate React Course 2024 instructed by Jonas Schmedtmann.",
    },
    features: [
      "authentication: the user needs to log in to perform tasks • the user can change its name and password and upload an avatar",
      "cabins: the app renders a table view with all cabins showing the cabin photo, name, capacity, price and current discount • users can update or delete a cabin and create new cabins",
      "bookings: the app renders a table view with all bookings showing arrival / departures dates, status, and paid amount, as well as cabin and guest data • other booking data include number of guests, number of nights, guests observations.",
      "check in / out: users are able to delete, check in or check out a booking as the guest arrives • users need to accept payment on check in and then confirm that payment has been received • on check in the guest has the ability to add breakfast for the entire stay.",
      "guests: data contain full name, email, national ID, nationality and a country flag ",
      "the app renders a dashboard with information for the last 7, 30 or 90 days about: the list of guests checking in and out on the current day • statistics on recent bookings, sales, check ins and occupancy rate • a chart with daily sales and a chart showing statistics on stay duration.",
    ],
    techStack: {
      language: ["Javascript", "HTML", "CSS"],
      libraries: "React",
      routing: "React Router",
      styling: "Styled Components",
      remoteStateManagement: "React Query",
      uiStateManagement: "Context API",
      formManagement: "React Hook Form",
      database: "Supabase",
      otherTools: "React icons, React hot toast, Recharts, date-fns",
    },
    images: [
      {
        imgFile: "wild-oasis/wild-oasis-homepage.png",
        imgAlt: "wild oasis homepage",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-allCabins.png",
        imgAlt: "wild oasis all cabins view",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-allBookings.png",
        imgAlt: "wild oasis all bookings view",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-addNewCabin.png",
        imgAlt: "wild oasis add new cabin form modal window",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-editCabin.png",
        imgAlt: "wild oasis edit cabin view",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-checkinDetails.png",
        imgAlt: "wild oasis check in details view",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-accountUpdate.png",
        imgAlt: "wild oasis account update form view",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-newUser.png",
        imgAlt: "wild oasis new user form view",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-settings.png",
        imgAlt: "wild oasis settings form view",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-codeApp.png",
        imgAlt: "wild oasis code app.png",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-codeAPIsignup.png",
        imgAlt: "wild oasis code sing up API",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-codeLogin.png",
        imgAlt: "wild oasis login API, get current user function",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-codeUseLoginHook.png",
        imgAlt: "wild oasis code login react hook",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-codeGetBookings.png",
        imgAlt: "wild oasis code bookings API",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-codeButtonComponent.png",
        imgAlt: "wild oasis code button component",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-codeButton2.png",
        imgAlt: "wild oasis code button component2",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-codeForm.png",
        imgAlt: "wild oasis code form component",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-codeFormRow.png",
        imgAlt: "wild oasis code form row component ",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-codeLocalStorageHook.png",
        imgAlt: "wild oasis code local storage hook",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-codeSignupForm.png",
        imgAlt: "wild oasis code signup form",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-codeSignUpHook.png",
        imgAlt: "wild oasis code signup hook",
        imgComments: "",
      },
      {
        imgFile: "wild-oasis/wild-oasis-codeUpdateUser.png",
        imgAlt: "wild oasis code update user ",
        imgComments: "",
      },
    ],
  },

  {
    id: "PJ002",
    show: true,
    title: "React Quiz",
    description:
      "A simple React quiz with 15 questions, a progress bar and a score.",
    mainTechnology: "React",
    github: "https://github.com/Thanos-M11/react-quiz",
    url: "https://react-quiz-20.netlify.app/",
    attribute: {
      link: "https://www.udemy.com/user/jonasschmedtmann/",
      description:
        "A project of Ultimate React Course 2024 instructed by Jonas Schmedtmann.",
    },
    features: [
      "progress bar",
      "user's score is displayed on top according to the answer",
      "once the user answers the question he then can move on to the next question",
      "once the user answers the question he can not change his answer",
      "timer counter for the whole quiz duration",
      "total score rendered at the end",
      "user can restart the quiz",
    ],
    techStack: {
      language: ["Javascript", "HTML", "CSS"],
      libraries: "React",
      styling: "CSS",
      uiStateManagement: "Context API & useReducer()",
    },
    images: [
      {
        imgFile: "quiz/quiz-homepage.png",
        imgAlt: "react quiz homepage view",
        imgComments: "",
      },
      {
        imgFile: "quiz/quiz-choices.png",
        imgAlt: "react quiz choices 1",
        imgComments: "",
      },
      {
        imgFile: "quiz/quiz-choices2.png",
        imgAlt: "react quiz choices 2",
        imgComments: "",
      },
      {
        imgFile: "quiz/quiz-finish.png",
        imgAlt: "react quiz finish view",
        imgComments: "",
      },
      {
        imgFile: "quiz/quiz-code-app.png",
        imgAlt: "react quiz code app",
        imgComments: "",
      },
      {
        imgFile: "quiz/quiz-code-createContext.png",
        imgAlt: "react quiz code create context",
        imgComments: "",
      },
      {
        imgFile: "quiz/quiz-code-nextButtonComponent.png",
        imgAlt: "react quiz code next button component",
        imgComments: "",
      },
      {
        imgFile: "quiz/quiz-code-provider.png",
        imgAlt: "react quiz code context provider",
        imgComments: "",
      },
      {
        imgFile: "quiz/quiz-code-reducer.png",
        imgAlt: "react quiz code reducer function",
        imgComments: "",
      },
    ],
  },

  {
    id: "PJ003",
    show: true,
    title: "Forkify",
    description:
      "An application where you can search for over 1.000.000 recipes and bookmark the ones that you like most.",
    mainTechnology: "Pure JavaScript",
    github: "https://github.com/Thanos-M11/forkify-thanosmk",
    url: "https://forkify-thanosmk.netlify.app/",
    attribute: {
      link: "https://www.udemy.com/user/jonasschmedtmann/",
      description:
        "A project of The Complete Javascript Course instructed by Jonas Schmedtmann.",
    },
    features: [
      "search: the user enters an ingredient or a recipe into a search input element.",
      "recipes list: the application renders a list f recipes according to the search criteria",
      "pagination: the recipes are listed in batches of 10 recipes per page, the user navigates through the pages with buttons below.",
      "recipe details: the application renders a section with the recipe picture and recipe ingredients as well as links on how to cook it.",
      "servings calculation: user can calculate the recipe ingredients by changing the number of servings",
      "bookmarks: the user can bookmark a recipe, access a list of bookmarked recipes",
      "add recipe: the user can add his own recipe",
    ],
    techStack: {
      language: ["Javascript", "HTML", "CSS"],
      externalApis: "https://forkify-api.herokuapp.com/api/v2/recipes/",
      styling: "Sass",
      architecture: "MVC Model View Controller",
      eventHandling: "Publisher - Subscriber Pattern",
      uiStateManagement: "within model.js",
    },
    images: [
      {
        imgFile: "forkify/forkify-homepage.png",
        imgAlt: "forkify homepage",
        imgComments: "",
      },
      {
        imgFile: "forkify/forkify-recipies.png",
        imgAlt: "forkify recipes",
        imgComments: "",
      },
      {
        imgFile: "forkify/forkify-bookmarks.png",
        imgAlt: "forkify bookmarks",
        imgComments: "",
      },
      {
        imgFile: "forkify/forkify-code-searchResults.png",
        imgAlt: "forkify code search results",
        imgComments: "",
      },
      {
        imgFile: "forkify/forkify-code-AJAX.png",
        imgAlt: "forkify code data upload AJAX async function",
        imgComments: "",
      },
      {
        imgFile: "forkify/forkify-code-controllerPagination.png",
        imgAlt: "forkify code pagination controller",
        imgComments: "",
      },
      {
        imgFile: "forkify/forkify-code-controllerRecipies.png",
        imgAlt: "forkify recipes controller",
        imgComments: "",
      },
      {
        imgFile: "forkify/forkify-code-eventHandlres.png",
        imgAlt: "forkify code event handlers",
        imgComments: "",
      },
      {
        imgFile: "forkify/forkify-code-modelCreateLoadRecipy.png",
        imgAlt: "forkify code model create loader recipe",
        imgComments: "",
      },
    ],
  },

  {
    id: "PJ004",
    show: true,
    title: "Bankist UI",
    description:
      "A beautiful fictional online bank UI designed as a single page application (SPA) with smooth transitions written in pure javascript.",
    mainTechnology: "Pure JavaScript",
    github: "https://github.com/Thanos-M11/bankist-ui",
    url: "https://banking-ui.netlify.app/",
    attribute: {
      link: "https://www.udemy.com/user/jonasschmedtmann/",
      description:
        "A project of The Complete Javascript Course instructed by Jonas Schmedtmann.",
    },
    features: [
      "smooth navigation transition",
      "tabs and tabbed components",
      "static slideshow (carusel)",
      "fixed navigation bar when scrolling",
    ],
    techStack: {
      language: ["Javascript", "HTML", "CSS"],
      styling: "CSS",
    },
    images: [
      {
        imgFile: "banking/banking-ui-homepage.png",
        imgAlt: "banking ui homepage view",
        imgComments: "",
      },
      {
        imgFile: "banking/banking-ui-features.png",
        imgAlt: "banking ui features section view",
        imgComments: "",
      },
      {
        imgFile: "banking/banking-ui-operations.png",
        imgAlt: "banking ui operations section view",
        imgComments: "",
      },
      {
        imgFile: "banking/banking-ui-testimonials.png",
        imgAlt: "banking ui testimonials section view",
        imgComments: "",
      },
      {
        imgFile: "banking/banking-ui-code-lazyLoadingImages.png",
        imgAlt: "banking ui code lazy loading images",
        imgComments: "",
      },
      {
        imgFile: "banking/banking-ui-code-elements.png",
        imgAlt: "banking ui code document elements",
        imgComments: "",
      },
      {
        imgFile: "banking/banking-ui-code-eventHandlers.png",
        imgAlt: "banking ui code event handlers",
        imgComments: "",
      },
      {
        imgFile: "banking/banking-ui-code-menuFadeAnimation.png",
        imgAlt: "banking ui code menu fade animation",
        imgComments: "",
      },
    ],
  },

  {
    id: "PJ005",
    show: true,
    title: "Wiki",
    description:
      "A wiki encyclopedia where the user enters a page using markdown syntax and the markdown is converted to HTML.",
    mainTechnology: "Python",
    github: "",
    attribute: {
      link: "https://cs50.harvard.edu/web/2020/projects/1/",
      description:
        "A project assignment under CS50w Web Programming with Python and JavaScript",
    },
    url: "",
    features: [
      "Entry Page: renders a page that displays the contents of that entry.",
      "Index Page: user can click on any entry name to be taken directly to that page.",
      "Search: user can type a query into the search box to search for an entry.",
      "New Page: user can create a new encyclopedia entry.",
      "Edit a page: user can make changes on a selected page.",
      "Random Page: renders a random encyclopedia entry.",
      "Markdown to HTML conversion: user enters a new entry using markdown syntax which is converted into HTML.",
    ],
    techStack: {
      language: ["Python", "HTML", "CSS"],
      framework: "Django",
      routing: "Django's URL routing system (urls/urls.py)",
      styling: "CSS",
      database: "Sqlite3",
    },
    images: [
      {
        imgFile: "wiki/wiki-homepage.png",
        imgAlt: "wiki homepage",
        imgComments: "",
      },
      {
        imgFile: "wiki/wiki-newPage.png",
        imgAlt: "new page entry",
        imgComments: "",
      },
      {
        imgFile: "wiki/wiki-editPage.png",
        imgAlt: "edit a new page",
        imgComments: "",
      },
      {
        imgFile: "wiki/wiki-page.png",
        imgAlt: "page content",
        imgComments: "",
      },
      {
        imgFile: "wiki/wiki-randomPage.png",
        imgAlt: "random page",
        imgComments: "",
      },
      {
        imgFile: "wiki/wiki-editHTML.png",
        imgAlt: "html code showing the page edit",
        imgComments: "",
      },
      {
        imgFile: "wiki/wiki-views-editPage.png",
        imgAlt: "edit page method in python",
        imgComments: "",
      },
      {
        imgFile: "wiki/wiki-views-newPage.png",
        imgAlt: "new page method in Python",
        imgComments: "",
      },
      {
        imgFile: "wiki/wiki-viewsClasses.png",
        imgAlt: "classes in python",
        imgComments: "",
      },
    ],
  },
];
