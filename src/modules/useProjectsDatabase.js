import { ref } from 'vue'

export const useProjectsDatabase = () => {
  const projects = ref([
    {
      id: 1,
      name: 'Reaching for the Stars',
      photo: 'https://picsum.photos/400/600',
      description:
        'Photo of a night sky with stars and a silhouette of a person reaching for them.',
      date: '2024-10-27',
      technologies: ['PhotoShop', 'CameraRaw'],
    },
    {
      id: 2,
      name: 'CocioSummerClash',
      photo: 'https://picsum.photos/400/600',
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
      name: 'Global Plastic Treaty',
      photo: 'https://picsum.photos/400/600',
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
      name: '',
    },
  ])

  return {
    projects,
  }
}
