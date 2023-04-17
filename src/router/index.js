import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import CourseQuize from '../pages/CourseQuize.vue';
import Course from '../pages/Course.vue';
import Login from '../components/Login/Login.vue'
import AdminDashboard from '../AdminDashboard/AdminDashboard.vue'
import CourseDetails from '../pages/CourseDetails.vue';
import CourseSessions from '../components/Course/CourseSessions.vue'
import AddCourse from '../AdminDashboard/components/AddCourse/AddCourse.vue'
import MainDashboard from '../AdminDashboard/components/MainDashboard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:Home
    },
    {
      path: '/:title',
      name: 'quize',
      component:CourseQuize
    },
    {
      path: '/course/all',
      name: 'course',
      component:Course,
      meta:{

        isAuthenticated:true
      }

    },
    {
      path: '/course/:slug',
      name: 'course-detais',
      component:CourseDetails
    },
    {
      path: '/course/:title/:slug',
      name: 'course-sessions',
      component:CourseSessions
    },
    {
      path: '/login',
      name: 'Login',
      component:Login
    },


    {
      path: '/admin',
      name: 'Admin',
      component:AdminDashboard,


      meta:{

        isAuthenticated:true
      },


      children:[
        {
          path:'',
          component:MainDashboard
        },
        {
          path:"/add",
          name:'add',
          component:AddCourse

        }
      ]
    },


  ]
})

// router.beforeEach((to, from, next) => {

//   if (to.meta.isAuthenticated) next({ name: 'admin' })
//   else next()
// })

export default router
