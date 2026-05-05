import { $bind, $scrollable, App, css, o, view } from "elt"
import { DatePicker, DateTimePicker, Select, theme, TimePicker } from "elt/ui";

import * as P from "elt-phosphor"
import * as D from "elt-phosphor/duotone"

const BaseReqs = App.Service.factory(async (srv) => {
    return { }
})

function tf_set(value: string): o.Converter<string, boolean> {
  return {
    transform(val: string) {
      return val === value
    },
    revert(newv, _, val) {
      return newv ? value : val
    }
  }
}

export default class Base extends BaseReqs {

  o_font = o("Segoe UI")

  @view
  Main() {
    return <e-flex column class={cls_fullscreen} style={{fontFamily: this.o_font}}>
      <header class={[cls_header, theme.class_light, theme.colors.blue.as_background]}>
        <nav>
          <button>𝑒</button>
          <button>Widgets <P.Table/></button>
          <button>Help <P.Question/></button>
        </nav>
      </header>
      <e-flex pad gap column grow style={{width: "100%"}}>
        {$scrollable}
        {this.srv.DisplayView("Content")}
        <h3>Font</h3>
        <e-box>
          <button>{$bind.toggler(this.o_font.tf(tf_set("SF Pro")))}SF Pro <P.AppleLogo/></button>
          <button>{$bind.toggler(this.o_font.tf(tf_set("Inter")))}Inter <P.LinuxLogo/></button>
          <button>{$bind.toggler(this.o_font.tf(tf_set("Noto Sans")))}Noto Sans <P.GoogleLogo/></button>
          <button>{$bind.toggler(this.o_font.tf(tf_set("Segoe UI")))}Segoe UI <P.WindowsLogo/></button>
          <button>{$bind.toggler(this.o_font.tf(tf_set("Ubuntu")))}Ubuntu <P.LinuxLogo/></button>
          <button>{$bind.toggler(this.o_font.tf(tf_set("Roboto")))}Roboto <P.AndroidLogo/></button>
        </e-box>

        <p>
          Hello <button e-variant="tint">Click me</button> <button e-variant="full">Click me</button><br/>How's it going ? <button e-variant="tint">Click me</button> <button e-variant="full">Click me</button><br/>
          Text and more text<br/>
          And going to the next line.
        </p>
        <p>Text text text !</p>

        <label><input type="checkbox"/> Unchecked</label>
        <label><input type="checkbox" checked/> Checked</label>
        <label><input type="checkbox" e-variant="switch"/> Switch</label>
        <label><input type="checkbox" e-variant="switch" checked/> Switch on</label>

        <e-flex gap wrap>

          {(Object.keys(theme.colors).filter(color => !["bg", "text", "tint"].includes(color)) as (keyof typeof theme.colors)[]).map(color => {
            const o_toggle = o(false)
            const o_toggle2 = o(true)
            return <e-flex column gap class={theme.colors[color].as_tint}>
              <span>{color}</span>
              <button>Normal</button>
              <e-box variant="vertical">
                <button>
                  {$bind.toggler(o_toggle)}
                  Off <P.Power/>
                </button>
                <button>
                  {$bind.toggler(o_toggle2)}
                  On <P.Power/>
                </button>
              </e-box>
              <button e-variant="text">text</button>
              <button e-variant="tint">tint <P.Heart/></button>
              <button e-variant="full">full <P.Heart/></button>
              <button disabled>disabled <P.Heart/></button>
              <button disabled e-variant="text">disabled text <P.Heart/></button>
              <button disabled e-variant="tint">disabled tint <P.Heart/></button>
              <button disabled e-variant="full">disabled full <P.Heart/></button>
              <label><input type="checkbox"/> Checkbox <P.Check/></label>
              <label><input type="checkbox" checked/> Checked</label>
              <label><input type="checkbox" e-variant="switch"/> Switch</label>
              <label><input type="checkbox" e-variant="switch" checked/> Switch on</label>
            </e-flex>
        })}
        </e-flex>

        <button disabled class={[theme.colors.red]}>Click me <P.Heart/></button>
        <button class={[theme.colors.green.as_background]}>Click me <D.Acorn/></button>

        <e-box>
          <button e-variant="tint">Button</button>
          <button e-variant="tint"><P.CaretDown/></button>
        </e-box>

        <e-flex gap wrap>
          <e-box>
            <input type="text" placeholder="Enter your text" />
            <button><P.X/></button>
          </e-box>
          <e-box>
            <input e-variant="tint" type="text" placeholder="Enter your text" />
            <button e-variant="tint"><P.X/></button>
          </e-box>

        </e-flex>

        <h3>Native date/time pickers</h3>
        <e-flex gap wrap>
          <e-box>
            <input type="date" />
          </e-box>

          <e-box>
            <input type="time" />
          </e-box>

          <e-box>
            <input type="datetime-local" />
          </e-box>
        </e-flex>

        <h3>elt-ui date pickers</h3>

        <e-flex gap wrap>
          <DatePicker/>
          <TimePicker/>
          <DateTimePicker/>
        </e-flex>

        <button e-variant="text">Text button</button>

        <Select
          options={["Option 1", "Option 2", "Option 3"]}
          model={o("Option 1")}
        />


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