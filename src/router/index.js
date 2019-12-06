import Vue from 'vue'
import Router from 'vue-router'
import ListCv from '@/components/ListCv'
import home from "@/components/home"
import myProfile from '@/components/my-profile/my-profile'
import infomation from '@/components/my-profile/infomation/infomation'
import Education from '@/components/my-profile/Education/Education'
import Project from '@/components/my-profile/project/project'
import Achievement from '@/components/my-profile/achievement/achievement'
import CareerGoal from '@/components/my-profile/CareerGoal/CareerGoal'
import LanguageAndHobby from '@/components/my-profile/LanguageAndHobby/LanguageAndHobby'
import WorkingExperience from '@/components/my-profile/WorkingExperience/WorkingExperience'
import WorkingSkill from '@/components/my-profile/WorkingSkill/WorkingSkill'
import createCV from '@/components/create-cv/create-cv'
import miniTools from '@/components/minitools/mini-tools'
import SalaryCalculate from '@/components/minitools/salary-calculate/salary-calculate'
import imageUpload from '@/components/minitools/image/image'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/my-cv',
      name: 'ListCv',
      component: ListCv
    },
    {
      path: '/create-cv',
      name: 'create-cv',
      component: createCV
    },
    {
      path: '/my-profile',
      name: 'my-profile',
      component: myProfile,
      children: [
        {
          path: '/my-profile/',
          name: 'infomation',
          component: infomation,
        },
        {
          path: '/my-profile/infomation',
          name: 'infomation-full-path',
          component: infomation,
        }, {
          path: '/my-profile/education',
          name: 'education',
          component: Education
        }, {
          path: '/my-profile/project',
          name: 'Project',
          component: Project
        }, {
          path: '/my-profile/achievement',
          name: 'achievement',
          component: Achievement
        },
        {
          path: '/my-profile/career-goal',
          name: 'career-goal',
          component: CareerGoal
        },
        {
          path: '/my-profile/LanguageAndHobby',
          name: 'LanguageAndHobby',
          component: LanguageAndHobby
        },
        {
          path: '/my-profile/WorkingExperience',
          name: 'WorkingExperience',
          component: WorkingExperience
        },
        {
          path: '/my-profile/WorkingSkill',
          name: 'WorkingSkill',
          component: WorkingSkill
        }
      ]
    },
    {
      path: '/mini-tools',
      name: 'mini-tools',
      component: miniTools,
      children: [
        {
          path: '/mini-tools/salary-calculate',
          name: 'salary-calculate2',
          component: SalaryCalculate,
        },
        {
          path: '/mini-tools',
          name: 'salary-calculate',
          component: SalaryCalculate,
        },
        {
          path: '/mini-tools/image-upload',
          name: 'image-upload',
          component: imageUpload,
        }
      ]
    }
  ]
})
