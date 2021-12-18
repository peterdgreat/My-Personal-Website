

const PROJECT_SUCCESS = 'portfolio/projects/PROJECT_SUCCESS';

const initialState = {
  projects: [
  {
    title: 'Crypto Metrics',
    details: 'A mobile web app that provides simple information about data in the cryptocurrency market',
    description: 'This is a mobile web app that provides simple information about data in the cryptocurrency market. Users can see the current price of any available cryptocurrency, can see the market cap of any cryptocurrency coin, and also filter the data based on the users search.',
    langs: ['React','Redux', 'Css', 'Bootstrap'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/Crypto-Metrics',
    live: 'https://crypto-metrics-d.netlify.app/',
  },
  {
    title: 'Space Travelers Hub',
    details: 'A web application for a company that provides commercial and scientific space travel services',
    description: 'A web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions..',
    langs: ['React', 'Redux', 'Css', 'Bootstrap'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/Space-Travellers-Hub',
    live: 'https://space-travellers.netlify.app/',
  },
  {
    title: 'Book Store',
    details: 'This Bookstore users you to: Display a list of books. Add a book. Remove a selected book.',
    description: 'This Bookstore allows users to: Display a list of books. Add a book. Remove a selected book.',
    langs: ['React', 'Css', 'Bootstrap'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/books-store',
    live: 'https://p-books.netlify.app/',
  },
  {
    title: 'A Todo List',
    details: 'A Todo List is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    description: 'A Todo List is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete.',
    langs: ['JavaScript', 'Css', 'Html', 'Bootstrap'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/Todo-List',
    live: 'https://peterdgreat.github.io/Todo-List/dist/',
  },
  {
    title: 'Math Magicians',
    details: 'Math Magicians is a website for all fans of mathematics',
    description: 'Math Magicians  is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to Make simple calculations and also allows users to read random facts about mathematics.',
    langs: ['React', 'Css', 'Bootstrap'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/math-magicians',
    live: 'https://mathematics-magicians.netlify.app/',
  },
  {
    title: 'Conference Event Website',
    details: 'This is a simple website built for a conference event ',
    description: 'This is a simple website built for a conference event and allows users to view the event details.',
    langs: ['Html', 'Css', 'Javascript', 'Bootstrap'],
    btn: 'see project',
    img: './img/Snapshoot-Portfolio.png',
    source: 'https://github.com/peterdgreat/capstone_project',
    live: 'https://peterdgreat.github.io/capstone_project/',
  }],
};
const setProject = () => ({
  type: PROJECT_SUCCESS,
  payload:initialState.projects,
});

export const getProjects = () => async (dispatch) => {
  dispatch(setProject());
};
const projectsReducer = (state = [], action) => {
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
