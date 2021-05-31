
import colab from '../../assets/projects_images/co-lab.png'
import data_analytics from '../../assets/projects_images/Data_analytics_preview.png'
import golang from '../../assets/projects_images/Golang_microservice.png'
import scribe from '../../assets/projects_images/scribe.png'
import tweetme_clone from '../../assets/projects_images/twitterclone.png'
const data_projects = [
    {
        name: 'Scribe',
        image: scribe,
        deployed_url: 'https://jarvis-b4a78.firebaseapp.com/home',
        github_url: 'https://github.com/abhishekratnam/scribe',
        category: ['angular','firebase']
    },

    {
        name: 'Data analytics',
        image: data_analytics,
        deployed_url: 'https://github.com/abhishekratnam/Data-Analytics-Projects',
        github_url: 'https://github.com/abhishekratnam/Data-Analytics-Projects',
        category: ['Python','Data Science']
    },

    {
        name: 'CoffeeShop',
        image: golang,
        deployed_url: 'https://github.com/abhishekratnam/coffeeshop',
        github_url: 'https://github.com/abhishekratnam/coffeeshop',
        category: ['golang','microservices', 'react']
    },

    {
        name: 'Colab',
        image: colab,
        deployed_url: 'https://github.com/abhishekratnam/co-lab',
        github_url: 'https://github.com/abhishekratnam/co-lab',
        category: ['html_css', 'python','django']
    },

    {
        name: 'Tweetme',
        image: tweetme_clone,
        deployed_url: 'https://github.com/abhishekratnam/twitterclone',
        github_url : 'https://github.com/abhishekratnam/twitterclone',
        category: ['react']
    }
]

export default data_projects;