const PROJECT_SUCCESS = 'portfolio/projects/PROJECT_SUCCESS';

const initialState = {
  mainProject: {
    id: '0',
    title: 'Motors Reservations',
    description: 'This is a website that allows users to make reservations for motorcycles. To make reservations, a user must be logged in. Users can also add to the list or delete from the list of motorcycles available.',
    langs: ['React', 'Css', 'Bootstrap', 'Redux', 'Rails'],
    btn: 'see project',
    img: 'https://res.cloudinary.com/djbriv46g/image/upload/v1647210189/motors_o0rvq1.png',
    source: 'https://github.com/peterdgreat/motors-frontend',
    live: 'https://motors-frontend-d-p-m.herokuapp.com/',
  },
  projects: [
    {
      id: '1',
      title: 'Budget App',
      description:
        'This is a mobile web application where you can manage your budget: you have a list of transactions associated with a category, so that you can see how much money you spent and on what.',
      langs: ['Ruby On Rails', 'Css', 'Bootstrap', 'Devise'],
      btn: 'see project',
      img: 'https://res.cloudinary.com/djbriv46g/image/upload/v1650010822/p-smart-budget_kwgixm.png',
      source: 'https://github.com/peterdgreat/Budget-App',
      live: 'https://smart-budgets-app.herokuapp.com/',
    },
    {
      id: '2',
      title: 'Crypto Metrics',
      description:
        'This is a web application that provides information about data in the cryptocurrency market. Users can see the current price of any available cryptocurrency coin.Users can see the market cap of any available cryptocurrency coin, and also filter the data based on the name search.',
      langs: ['React', 'Css', 'Bootstrap', 'Redux'],
      btn: 'see project',
      img: 'https://res.cloudinary.com/djbriv46g/image/upload/v1650009911/p-crypto_ci8ewu.png',
      source: 'https://github.com/peterdgreat/Crypto-Metrics',
      live: 'https://crypto-metrics-d.netlify.app/',
    },
    {
      id: '3',
      title: 'Space Travelers Hub',
      description:
        'A web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',
      langs: ['React', 'Css', 'Bootstrap', 'Redux'],
      btn: 'see project',
      img: 'https://res.cloudinary.com/djbriv46g/image/upload/v1650010171/p-space-travellers_qhn3qk.png',
      source: 'https://github.com/peterdgreat/Space-Travellers-Hub',
      live: 'https://space-travellers.netlify.app/',
    },
    {
      id: '4',
      title: 'Book Store',
      description:
        'This Bookstore displays a list of books. It allows users to add a book, and remove a selected book.',
      langs: ['React', 'Css', 'Bootstrap', 'Redux'],
      btn: 'see project',
      img: 'https://res.cloudinary.com/djbriv46g/image/upload/v1639933581/books_nibytw.jpg',
      source: 'https://github.com/peterdgreat/books-store',
      live: 'https://p-books.netlify.app/',
    },
    {
      id: '5',
      title: 'A Todo List',
      description:
        'This is Todo List app that alows users to organoze their day. It allows users to: Add a task. Remove a selected task. Mark a task as complete.',
      langs: ['Html', 'Css', 'JavaScript', 'Bootstrap'],
      btn: 'see project',
      img: 'https://res.cloudinary.com/djbriv46g/image/upload/v1650011806/p-todo_m3u209.png',
      source: 'https://github.com/peterdgreat/Todo-List',
      live: 'https://peterdgreat.github.io/Todo-List/dist/',
    },
    {
      id: '6',
      title: 'The Cocktail',
      description:
        "      This is a web app that provides information about cocktail recipes. It allows users to like their favorite cocktails, user's can also leave comments on the recipes.",
      langs: ['Html', 'Css', 'JavaScript', 'Bootstrap'],
      btn: 'see project',
      img: 'https://res.cloudinary.com/djbriv46g/image/upload/v1639933594/cocktailjpg_hlfkrh.jpg',
      source: 'https://github.com/peterdgreat/TheCocktail',
      live: 'https://rocio01.github.io/TheCocktail/',
    },
  ],
};
const setProject = () => ({
  type: PROJECT_SUCCESS,
  payload: initialState.projects,
});

export const getProjects = () => async (dispatch) => {
  dispatch(setProject());
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_SUCCESS:
      return {
        ...state,
        projects: action.payload,
      };

    default:
      return state;
  }
};

export default projectsReducer;
