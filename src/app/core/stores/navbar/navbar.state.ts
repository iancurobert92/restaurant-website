import { State, Action, Selector, StateContext } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { HideSidebar, ShowSidebar } from './navbar.actions';

export interface NavbarStateModel {
  expanded:boolean;
}

@State<NavbarStateModel>({
  name: 'navbar',
  defaults: {
    expanded:false
  }
})
export class NavbarState {

  @Selector()
  public static getState(state: NavbarStateModel) {
    return state;
  }

  @Action(ShowSidebar)
  public showSidebar(ctx: StateContext<NavbarStateModel>) {
    ctx.setState(
      patch({
        expanded: true
      })
    );
  }

  @Action(HideSidebar)
  public hideSidebar(ctx: StateContext<NavbarStateModel>) {
    ctx.setState(
      patch({
        expanded: false
      })
    );
  }
}
