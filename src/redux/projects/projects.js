const PROJECT_SUCCESS = 'portfolio/projects/PROJECT_SUCCESS';

const initialState = {
  projects: [
    {
      id: '1',
      title: 'Crypto Metrics',
      description:
        'This is a web application that provides information about data in the cryptocurrency market. Users can see the current price of any available cryptocurrency coin.Users can see the market cap of any available cryptocurrency coin, and also filter the data based on the name search.',
      langs: ['React', 'Css', 'Bootstrap'],
      btn: 'see project',
      img: 'https://res.cloudinary.com/djbriv46g/image/upload/v1639933619/Crypto_cun15q.jpg',
      source: 'https://github.com/peterdgreat/Crypto-Metrics',
      live: 'https://crypto-metrics-d.netlify.app/',
    },
    {
      id: '2',
      title: 'Space Travelers Hub',
      description:
        'A web application for a company that provides commercial and scientific space travel services. The application allows users to book rockets and join selected space missions.',
      langs: ['React', 'Css', 'Bootstrap'],
      btn: 'see project',
      img: 'https://res.cloudinary.com/djbriv46g/image/upload/v1639933633/Space-travellers_og8hkh.jpg',
      source: 'https://github.com/peterdgreat/Space-Travellers-Hub',
      live: 'https://space-travellers.netlify.app/',
    },
    {
      id: '3',
      title: 'Book Store',
      description:
        'This Bookstore displays a list of books. It allows users to add a book, and remove a selected book.',
      langs: ['React', 'Css', 'Bootstrap'],
      btn: 'see project',
      img: 'https://res.cloudinary.com/djbriv46g/image/upload/v1639933581/books_nibytw.jpg',
      source: 'https://github.com/peterdgreat/books-store',
      live: 'https://p-books.netlify.app/',
    },
    {
      id: '4',
      title: 'A Todo List',
      description:
        'This is Todo List app that alowws users to organoze their day. It allows users to: Add a task. Remove a selected task. Mark a task as complete.',
      langs: ['Html', 'Css', 'JavaScript'],
      btn: 'see project',
      img: 'https://res.cloudinary.com/djbriv46g/image/upload/v1639933642/todo_a7uxnb.jpg',
      source: 'https://github.com/peterdgreat/Todo-List',
      live: 'https://peterdgreat.github.io/Todo-List/dist/',
    },
    {
      id: '5',
      title: 'The Cocktail',
      description:
        "      This is a web app that provides information about cocktail recipes. It allows users to like their favorite cocktails, user's can also leave comments on the recipes.",
      langs: ['Html', 'Css', 'JavaScript'],
      btn: 'see project',
      img: 'https://res.cloudinary.com/djbriv46g/image/upload/v1639933594/cocktailjpg_hlfkrh.jpg',
      source: 'https://github.com/peterdgreat/TheCocktail',
      live: 'https://rocio01.github.io/TheCocktail/',
    },
    {
      id: '6',
      title: 'Conference Event Website',
      details: 'This is a simple website built for a conference event ',
      description:
        'This is a simple website built for a conference event, users can view the past conference events and get information about upcoming events.',
      langs: ['Html', 'Css', 'Javascript', 'Bootstrap'],
      btn: 'see project',
      img: 'https://res.cloudinary.com/djbriv46g/image/upload/v1639933607/conferencejpg_wnemgg.jpg',
      source: 'https://github.com/peterdgreat/capstone_project',
      live: 'https://peterdgreat.github.io/capstone_project/',
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
