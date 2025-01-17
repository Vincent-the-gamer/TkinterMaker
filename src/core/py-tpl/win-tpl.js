import CommonTpl from "./common-tpl"

export default class WinTpl {
    make(frame, elemetns) {
        let header = `
class Win_${frame.id}:
    def __init__(self):
        self.root = self.__win()`

        let code = ""
        let ct = new CommonTpl()
        code += ct.setval(elemetns)

        code += `
`
        let win = this.win(frame.text, frame.width, frame.height)
        return header + code + win
    }

    // 主窗口
    win(title, width, height) {
        return `
    def __win(self):
        root = Tk()
        root.title("${title}")
        # 设置大小 居中展示
        width = ${width}
        height = ${height}
        screenwidth = root.winfo_screenwidth()
        screenheight = root.winfo_screenheight()
        geometry = '%dx%d+%d+%d' % (width, height, (screenwidth - width) / 2, (screenheight - height) / 2)
        root.geometry(geometry)
        root.resizable(width=False, height=False)
        return root
`
    }
}