import clone from "../assets/png/NetflixClone.png"
import petwitter from "../assets/png/PETWITTER.png"
import playMemory from "../assets/png/JOGO_DA_MEMORIA.png"
import frut from "../assets/png/FRUTEIRA.COM.png"

export const projectsData = [
  {
    id: 1,
    projectName: "Petwitter",
    projectDesc:
      "Projeto de rede social para pets, projeto desenvolvido como teste final do curso da Otterwise, onde criei tanto o front-end quanto o back-end do projeto.",
    tags: ["React", "Chakra UI", "API REST"],
    code: "https://github.com/Lucas-Silva-Amaral/FinalProjectOtterwise-frontEnd",
    demo: "https://final-project-otterwise-front-end.vercel.app/login",
    image: petwitter,
  },
  {
    id: 2,
    projectName: "Netflix Clone interface",
    projectDesc:
      "Projeto de interface clone do Netflix, desenvolvido com ReactJS.",
    tags: ["React", "CSS", "API REST"],
    code: "https://github.com/Lucas-Silva-Amaral/Netflix_Clone_ReactJS",
    demo: "https://netflixcloneint.netlify.app",
    image: clone,
  },
  {
    id: 3,
    projectName: "Jogo da Memoria",
    projectDesc:
      "Projeto desenvolvido no curso do programador BR.",
    tags: ["HTML", "CSS","Javascript"],
    code: "https://github.com/Lucas-Silva-Amaral/Final_work_prog_web",
    demo: "https://work-prog-web.netlify.app/",
    image: playMemory,
  },
  {
    id: 4,
    projectName: "Fruteira Online",
    projectDesc:
      "Projeto desenvolvindo como teste no curso da otterwise",
    tags: ["React", "Chakra UI"],
    code: "https://github.com/Lucas-Silva-Amaral/CartFruitsProjectOtterwise",
    demo: "https://cart-fruits-otterwise.netlify.app/",
    image: frut,
  },
  
]

// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/
