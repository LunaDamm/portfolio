import { ref } from 'vue'

export const useProjectsDatabase = () => {
  const projects = ref([
    {
      id: 1,
      type: 'photo',
      filename: 'stars.png',
      name: 'Reaching for the Stars',
      photo: '/images/stars.png',
      description:
        'Photo of a night sky with stars and a silhouette of a person reaching for them.',
      date: '2024-10-27',
      technologies: ['PhotoShop', 'CameraRaw'],
    },
    {
      id: 2,
      type: 'project',
      filename: 'cocio.proj',
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
    },
    {
      id: 3,
      type: 'project',
      filename: 'treaty.proj',
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
    },
    {
      id: 4,
      type: 'project',
      filename: 'easv_com.proj',
      name: 'EASV Commercial',
      photo: 'https://picsum.photos/601/400',
      description: 'Commercial project for EASV.',
      date: '2024-12-01',
      technologies: ['Final Cut Pro'],
    },
    {
      id: 5,
      type: 'music',
      filename: 'job.mp3',
      name: "Lookin' for at Job",
      photo: 'https://picsum.photos/601/400',
      description: 'Music created by me for a job application.',
      date: '2024-12-01',
      technologies: ['Logic Pro'],
    },
  ])

  return {
    projects,
  }
}
