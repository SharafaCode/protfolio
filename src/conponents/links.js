import home from '../assets/home.png';
import user from '../assets/user.png';
import letter from '../assets/letter.png';
import skills from '../assets/skills.png';
import portfolio from '..//assets/briefcase.png';
import workout from '../assets/dumbbells.png'
import books from '../assets/openbook.png'
import blog from '../assets/blogging.png';

const links = [
     {
      id: 0,
      title: "Home",
      path: '/',
      img: home,
    },
    {
      id: 1,
      title: "About",
      path: 'about',
      img: user,
    },
    {
      id: 2,
      title: "My Skill",
      path: 'skills',
      img: skills,
    },
    {
      id: 3,
      title: "Portfolio",
      path: 'projects',
      img: portfolio,
    },
    {
      id: 4,
      title: "Contact",
      path: 'contact',
      img: letter,
    },
    // {
    //   id: 5,
    //   title: "WorkOut",
    //   path: 'workout',
    //   img: workout,
    // },
    {
      id: 6,
      title: "Books",
      path: 'books',
      img: books,
    },
    {
      id: 7,
      title: "blogs",
      path: 'blogs',
      img: blog,
    }
  ];

  export default links