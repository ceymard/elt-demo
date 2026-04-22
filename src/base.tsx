import { App, css, view } from "elt"
import { theme, cls_button_tint, cls_button_full } from "elt/ui";

import * as P from "elt-phosphor"

const BaseReqs = App.Service.factory(async (srv) => {
    return { }
})

export default class Base extends BaseReqs {

  @view
  Main() {
    return <e-flex column class={cls_fullscreen}>
      <header class={[cls_header, theme.colors.tint.as_light_background]}>
        <nav>
          <button>Widgets <P.PhTable/></button>
          <button>Help <P.PhQuestion/></button>
        </nav>
      </header>
      <e-flex pad gap column>
        {this.srv.DisplayView("Content")}
        <p>Hello <button class={cls_button_tint}>Click me</button> <button class={cls_button_full}>Click me</button><br/>How's it going ? <button class={cls_button_tint}>Click me</button> <button class={cls_button_full}>Click me</button></p>


        <e-flex gap wrap>
          {(["red", "red_orange", "orange", "yellow", "yellow_green", "green", "cyan_green", "cyan", "blue", "blue_purple", "purple", "magenta"] as const).map(color =>
            <button class={[theme.colors[color].as_tint, cls_button_full]}>Click me <P.PhHeart/></button>
          )}
        </e-flex>
        <button class={[theme.colors.red.as_tint, cls_button_full]}>Click me <P.PhHeart/></button>
        <button class={[theme.colors.green.as_tint, cls_button_full]}>Click me <P.PhAcornDuotone/></button>
      </e-flex>
    </e-flex>
  }

}

const cls_fullscreen = css`.fullscreen {
  width: 100%;
  height: 100%;
}`

const cls_header = css`.header {
  display: flex;
  width: 100%;
}`