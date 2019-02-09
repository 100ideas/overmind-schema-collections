import { parallel, action } from 'overmind'

export const showHomePage = ({ state }) => {
  state.currentPage = "home";
  state.modalUser = null
}

export const showStateJson = ({ state }) => {
  state.showStateJson = !state.showStateJson
}

export const showCollectionsPage = action(async ({ value: params, state, effects }) => {
  if (!params.id) state.modalUser = null

  state.currentPage = 'collections'
  state.isLoadingCollection = true
  state.collections = await effects.api.getCollection();
  state.isLoadingCollection = false;
})

export const showUserModal = parallel(
  showCollectionsPage,
  action(async ({ value: params, state, effects }) => {
    // state.currentUserModalTabIndex = Number(params.tab)

    if (state.modalUser && state.modalUser.id === params.id) return

    state.isLoadingCollectionDetails = true;
    state.modalUser = await effects.api.getCollectionWithDetails(params.id);
    state.isLoadingCollectionDetails = false;
  })
)
