import tweetme from '../../assets/projects_images/tweetme.png'
import colab from '../../assets/projects_images/co-lab.png'
import data_analytics from '../../assets/projects_images/Data_analytics_preview.png'
import golang from '../../assets/projects_images/Golang_microservice.png'
import scribe from '../../assets/projects_images/scribe.png'
import tweetme_clone from '../../assets/projects_images/twitterclone.png'
const data_projects = [
    {
        name: 'Scribe',
        image: scribe,
        deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
        category: ['angular','firebase']
    },

    {
        name: 'Data analytics',
        image: data_analytics,
        deployed_url: 'https://dev-talks.herokuapp.com/',
        github_url: 'https://github.com/Dey-Sumit/Dev-talks',
        category: ['Python','Data Science']
    },

    {
        name: 'CoffeeShop',
        image: golang,
        deployed_url: 'https://sumit-chat.netlify.app/',
        github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
        category: ['golang','microservices', 'react']
    },

    {
        name: 'Tweeter Clone',
        image: tweetme,
        deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
        github_url: 'https://github.com/Dey-Sumit/tweetme',
        category: ['django', 'react']
    },

    {
        name: 'Colab',
        image: colab,
        deployed_url: 'https://github.com/Dey-Sumit/tweetme',
        github_url: 'https://github.com/Dey-Sumit/tweetme',
        category: ['html_css', 'python','django']
    },

    {
        name: 'Tweetme',
        image: tweetme_clone,
        deployed_url: 'http://suprateem.herokuapp.com/',
        github_url : 'https://github.com/Dey-Sumit/tweetme',
        category: ['react']
    }
]

export default data_projects;