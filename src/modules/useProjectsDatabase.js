import { ref } from 'vue'

export const useProjectsDatabase = () => {
  const projects = ref([
    {
      id: 1,
      type: 'photo',
      filename: 'stars',
      fileExtension: '.png',
      name: 'Reaching for the Stars',
      photo: '/images/stars.png',
      description:
        'Photo of a night sky with stars and a silhouette of a person reaching for them.',
      date: '2024-10-27',
      technologies: ['PhotoShop', 'CameraRaw'],
      technologiesIcons: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
      ],
    },
    {
      id: 2,
      type: 'project',
      filename: 'cocio',
      fileExtension: '.proj',
      name: 'CocioSummerClash',
      photo: 'https://picsum.photos/600/400',
      description: 'Project CocioSummerClash is a hypothetical summer event in Esbjerg, Denmark.',
      date: '2025-04-04',
      technologies: [
        'PhotoShop',
        'Illustrator',
        'After Effects',
        'Premiere Pro',
        'Final Cut Pro',
        'Logic Pro',
      ],
      technologiesIcons: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-plain.svg',
        '/icons/final_cut_pro.png',
        '/icons/logic_pro.png',
      ],
    },
    {
      id: 3,
      type: 'project',
      filename: 'treaty',
      fileExtension: '.proj',
      name: 'Global Plastic Treaty',
      photo: 'https://picsum.photos/602/400',
      description: 'Exam Project on the Global Plastic Treaty.',
      date: '2025-01-15',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'PhotoShop',
        'Illustrator',
        'Figma',
        'Final Cut Pro',
      ],
      technologiesIcons: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-plain.svg',
        '/icons/final_cut_pro.png',
      ],
    },
    {
      id: 4,
      type: 'project',
      filename: 'easv_com',
      fileExtension: '.proj',
      name: 'EASV Commercial',
      photo: 'https://picsum.photos/601/400',
      description: 'Commercial project for EASV.',
      date: '2024-12-01',
      technologies: ['Final Cut Pro'],
      technologiesIcons: ['/icons/final_cut_pro.png'],
    },
    {
      id: 5,
      type: 'music',
      filename: 'job',
      fileExtension: '.mp3',
      name: "Lookin' for at Job",
      photo: 'https://picsum.photos/601/400',
      description: 'Music created by me for a job application.',
      date: '2024-12-01',
      technologies: ['Logic Pro'],
      technologiesIcons: ['/icons/logic_pro.png'],
    },
  ])

  return {
    projects,
  }
}
