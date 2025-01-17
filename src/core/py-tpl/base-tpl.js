/**
 * 基础组件
 */
export default class BaseTpl {
    tk_button(ele) {
        return `
    def __tk_button_${ele.id}(self):
        btn = Button(self.root, text="${ele?.text}")
        btn.place(x=${ele.left}, y=${ele.top}, width=${ele.width}, height=${ele.height})
        return btn
`
    }

    tk_input(ele) {
        return `
    def __tk_input_${ele.id}(self):
        ipt = Entry(self.root)
        ipt.place(x=${ele.left}, y=${ele.top}, width=${ele.width}, height=${ele.height})
        return ipt
`
    }

    tk_label(ele) {
        return `
    def __tk_label_${ele.id}(self):
        label = Label(self.root,text="${ele.text}")
        label.place(x=${ele.left}, y=${ele.top}, width=${ele.width}, height=${ele.height})
        return label
`
    }

    tk_text(ele) {
        return `
    def __tk_text_${ele.id}(self):
        text = Text(self.root)
        text.place(x=${ele.left}, y=${ele.top}, width=${ele.width}, height=${ele.height})
        return text
`
    }

    tk_radio_button(ele) {
        return `
    def __tk_radio_button_${ele.id}(self):
        rb = Radiobutton(self.root,text="${ele.text}")
        rb.place(x=${ele.left}, y=${ele.top}, width=${ele.width}, height=${ele.height})
        return rb
`
    }

    tk_check_button(ele) {
        return `
    def __tk_check_button_${ele.id}(self):
        cb = Checkbutton(self.root,text="${ele.text}")
        cb.place(x=${ele.left}, y=${ele.top}, width=${ele.width}, height=${ele.height})
        return cb
`
    }

    tk_list_box(ele) {
        return `
    def __tk_list_box_${ele.id}(self):
        lb = Listbox(self.root)
        lb.insert(END, "列表框")
        lb.insert(END, "Python")
        lb.insert(END, "Tkinter Helper")
        lb.place(x=${ele.left}, y=${ele.top}, width=${ele.width}, height=${ele.height})
        return lb
`
    }

    tk_select_box(ele) {
        return `
    def __tk_select_box_${ele.id}(self):
        cb = Combobox(self.root, state="readonly")
        cb['values'] = ("下拉选择框", "Python", "Tkinter Helper")
        cb.place(x=${ele.left}, y=${ele.top}, width=${ele.width}, height=${ele.height})
        return cb
`
    }

    tk_progressbar(ele) {
        let orient = "HORIZONTAL" // 默认横向
        if (ele.width < ele.height) {
            orient = "VERTICAL"  // 高度大于宽度  改为竖向
        }

        return `
    def __tk_progressbar_${ele.id}(self):
        progressbar = Progressbar(self.root, orient=${orient})
        progressbar.place(x=${ele.left}, y=${ele.top}, width=${ele.width}, height=${ele.height})
        return progressbar
`
    }

    tk_table(ele) {
        return `
    def __tk_table_${ele.id}(self):
        # 表头字段 表头宽度
        columns = {"ID":50, "网站名": 100, "地址": 300}
        # 初始化表格 表格是基于Treeview，tkinter本身没有表格。show="headings" 为隐藏首列。
        tk_table = Treeview(self.root, show="headings", columns=list(columns))
        for text, width in columns.items():  # 批量设置列属性
            tk_table.heading(text, text=text, anchor='center')
            tk_table.column(text, anchor='center', width=width, stretch=False) # stretch 不自动拉伸
        
        data = [
            [1,"github", "https://github.com/iamxcd/tkinter-helper"],
            [2,"演示地址", "https://www.pytk.net/tkinter-helper"]
        ]
        
        # 导入初始数据
        for values in data:
            tk_table.insert('', END, values=values)
        
        tk_table.place(x=${ele.left}, y=${ele.top}, width=${ele.width}, height=${ele.height})
        return tk_table
`
    }
}