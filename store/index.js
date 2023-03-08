

import ptBR from '@/assets/languages/pt-br.json'
import enUS from '@/assets/languages/en-us.json'

export const state = () => ({
    pageActive: 1,
    contentHeader: ptBR.header,
    contentSite: ptBR,
    contentFooter: ptBR.footer
})

export const mutations = {
    setlanguageActive(state, value) {
        if (value === 1) {
            state.contentSite = ptBR
            state.contentHeader = ptBR.header
            state.contentFooter = ptBR.footer
            state.localStorage.languageActive = 1
        } else if (value === 2) {
            state.contentSite = enUS
            state.contentHeader = enUS.header
            state.contentFooter = enUS.footer
            state.localStorage.languageActive = 2
        }
    },
}