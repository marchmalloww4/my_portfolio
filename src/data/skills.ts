import type { SkillGroup } from './types'

export const skillGroups: SkillGroup[] = [
  {
    title: 'AI & Machine Learning',
    skills: ['Python', 'scikit-learn', 'PyTorch', 'NLP', 'BERT', 'Neural Networks', 'Deep Learning', 'Predictive Analytics', 'TF-IDF', 'Regression', 'Classification', 'Model Evaluation'],
    relatedProjectSlugs: ['fyp-extraverse-ai', 'sentiment-analysis-threads'],
  },
  {
    title: 'Data',
    skills: ['SQL', 'Pandas', 'Data Analysis', 'Data Preprocessing', 'Feature Engineering', 'Power BI', 'Tableau', 'Excel'],
    relatedProjectSlugs: ['sentiment-analysis-threads', 'fyp-extraverse-ai'],
  },
  {
    title: 'Cloud & AI Platforms',
    skills: ['Google Cloud Platform', 'BigQuery', 'Vertex AI'],
    relatedProjectSlugs: [],
  },
  {
    title: 'Development & Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'C++', 'Arduino', 'HTML'],
    relatedProjectSlugs: ['smart-shelter', 'tuberculosis-diagnostic-system'],
  },
]
