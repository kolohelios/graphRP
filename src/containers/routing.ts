import { Container } from 'unstated'

interface IRouterState {
  sidebarOpen: boolean
}

class RouterContainer extends Container<IRouterState> {
  constructor() {
    super()
    this.state = {
      sidebarOpen: false
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
