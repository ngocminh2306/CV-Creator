import Vue from 'vue'
import Router from 'vue-router'
import ListCv from '@/components/ListCv'
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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
          name: 'infomation',
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
  ]
})
