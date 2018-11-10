import { Container } from 'unstated'

interface IRouterState {
  showModal: boolean
  sidebarOpen: boolean
}

class RouterContainer extends Container<IRouterState> {
  constructor() {
    super()
    this.state = {
      showModal: false,
      sidebarOpen: false,
    }
  }

  openSidebar = () => {
    this.setState({
      sidebarOpen: true,
    })
  }

  closeSidebar = () => {
    this.setState({
      sidebarOpen: false,
    })
  }
}

const routerContainer = new RouterContainer()
export { routerContainer as default, RouterContainer }
