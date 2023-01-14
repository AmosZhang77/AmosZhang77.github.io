"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2351],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var l=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)t=o[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=l.createContext({}),c=function(e){var n=l.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=c(e.components);return l.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},m=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,f=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return t?l.createElement(f,r(r({ref:n},d),{},{components:t})):l.createElement(f,r({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=t[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5071:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var l=t(7462),a=(t(7294),t(3905));const o={},r=void 0,s={unversionedId:"vue2/other/other",id:"vue2/other/other",title:"other",description:"sortablejs \u62d6\u62fd",source:"@site/docs/vue2/other/other.mdx",sourceDirName:"vue2/other",slug:"/vue2/other/",permalink:"/docs/vue2/other/",draft:!1,tags:[],version:"current",lastUpdatedAt:1671760157,formattedLastUpdatedAt:"2022\u5e7412\u670823\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useful_fn",permalink:"/docs/vue2/base/useful_fn/"},next:{title:"source_code",permalink:"/docs/vue2/source_code/"}},i={},c=[{value:"sortablejs \u62d6\u62fd",id:"sortablejs-\u62d6\u62fd",level:3},{value:"table \u5355\u5143\u683c\u9519\u4e71",id:"table-\u5355\u5143\u683c\u9519\u4e71",level:3},{value:"el-dialog \u5d4c\u5957",id:"el-dialog-\u5d4c\u5957",level:3},{value:"el-select \u81ea\u52a8\u5c55\u5f00",id:"el-select-\u81ea\u52a8\u5c55\u5f00",level:3}],d={toc:c};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"sortablejs-\u62d6\u62fd"},"sortablejs \u62d6\u62fd"),(0,a.kt)("p",null,"\u8868\u683c\u62d6\u62fd\uff0c\u8868\u5355\u65f6\u95f4\u6bd4\u8f83\u89c4\u5219\u9a8c\u8bc1\uff0c\u76f8\u540c\u8f93\u5165\u9a8c\u8bc1"),(0,a.kt)("p",null,"row-key \u7684\u552f\u4e00\u6027\u4fdd\u8bc1\u62d6\u62fd\u4e4b\u540e\u6570\u636e\u4e0d\u4f1a\u9519\u4e71"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},'import Sortable from \'sortablejs\'\n\n<template>\n  <el-dialog\n    :visible.sync="visible"\n    width="1200px"\n    :close-on-click-modal="false"\n    :modal-append-to-body="false"\n    destroy-on-close\n  >\n    <el-form\n      ref="formModel"\n      :model="formModel"\n      :rules="rules"\n      label-width="140px"\n    >\n      <el-form-item prop="startTime" :rules="rules.startTime" label="\u5f00\u59cb\u65f6\u95f4">\n        <el-date-picker\n          v-model="formModel.startTime"\n          value-format="yyyy-MM-dd HH:mm:ss"\n          type="date"\n          placeholder="\u9009\u62e9\u65e5\u671f"\n        />\n      </el-form-item>\n\n      <el-button type="primary" @click="addOne"\n        ><tr-svg-icon\n          class="bussiness"\n          icon-class="add"\n        />\u65b0\u589e\u4e00\u6761\u8868\u5355</el-button\n      >\n\n      <el-table\n        ref="table"\n        :data="formModel.projectPlanMilestonesDTOList"\n        highlight-current-row\n        :class="{ activeListTable: visible }"\n        hide-index\n        height="calc(100vh - 297px)"\n        row-key="locId"\n      >\n        <el-table-column label="\u6392\u5e8f" align="center" min-width="40">\n          <template>\n            \x3c!--\u8bbe\u7f6e\u62d6\u62fd\u5143\u7d20class\uff0c\u4e0e\u914d\u7f6e\u987b\u76f8\u540c\uff0c\u4e3a\u4e86\u5176\u4ed6\u4f4d\u7f6e\u4e0d\u6210\u4e3a\u62d6\u62fd\u7684\u542f\u52a8\u6309\u94ae\uff0c\u53ea\u6709\u62d6\u62fd\u6307\u5b9a--\x3e\n            <tr-svg-icon icon-class="drag" title="\u62d6\u62fd\u56fe\u6807" class="drag" />\n          </template>\n        </el-table-column>\n\n        \x3c!--table\u8981\u8bbe\u5b9a\u552f\u4e00\u7684row-key\uff0c\u5426\u5219\u62d6\u62fd\u6362\u4f4d\u7f6e\u4f1a\u65f6\u6570\u636e\u4f1a\u9519\u4e71--\x3e\n        <el-table-column label="\u5e8f\u53f7" align="center" min-width="40">\n          <template slot-scope="scope">\n            <div>\n              {{ scope.$index + 1 }}\n            </div>\n          </template>\n        </el-table-column>\n        <el-table-column label="\u91cc\u7a0b\u7891\u540d\u79f0" align="center" min-width="160">\n          <template slot-scope="scope">\n            \x3c!--\u53ef\u53d8\u6570\u91cf\u8868\u5355\u9a8c\u8bc1prop\u548crules\u8bbe\u5b9a\uff0cprop\u5b9a\u4f4d\u9700\u8981\u9a8c\u8bc1\u7684\u6570\u636e\uff0crules\u5b9a\u4f4drules\u5bf9\u8c61\u5bf9\u5e94\u6821\u9a8c\u5c5e\u6027--\x3e\n            <el-form-item\n              :prop="`projectPlanMilestonesDTOList[${scope.$index}].milestonesName`"\n              :rules="rules.projectPlanMilestonesDTOList.milestonesName"\n              label-width="0"\n            >\n              \x3c!--vue\u7528\u4e8e\u5904\u7406\u7a7a\u683c\u8fc7\u5fc5\u586b\u9a8c\u8bc1\u7684\u65b9\u6cd5\uff0cv-model.trim--\x3e\n              <el-input\n                v-if="edit"\n                v-model.trim="scope.row.milestonesName"\n                placeholder="\u6a21\u677f\u540d\u79f0"\n                maxlength="100"\n              />\n            </el-form-item>\n          </template>\n        </el-table-column>\n        <el-table-column label="\u8ba1\u5212\u5b8c\u6210\u65f6\u95f4" align="center" min-width="140">\n          <template slot-scope="scope">\n            <el-form-item\n              :prop="`projectPlanMilestonesDTOList[${scope.$index}].expectedFinishTime`"\n              :rules="rules.projectPlanMilestonesDTOList.expectedFinishTime"\n              label-width="0"\n            >\n              <el-date-picker\n                v-if="edit"\n                v-model="scope.row.expectedFinishTime"\n                value-format="yyyy-MM-dd HH:mm:ss"\n                type="date"\n                placeholder="\u9009\u62e9\u65e5\u671f"\n                maxlength="120"\n                @blur="validate"\n              />\n              <el-tooltip v-else :content="scope.row.expectedFinishTime">\n                <div class="lineEndPoint">\n                  {{ scope.row.expectedFinishTime }}\n                </div>\n              </el-tooltip>\n            </el-form-item>\n          </template>\n        </el-table-column>\n        <el-table-column\n          label="\u64cd\u4f5c"\n          prop="milestonesName"\n          align="center"\n          min-width="80"\n        >\n          <template slot-scope="scope">\n            <el-button @click="delOne(scope.row)">\u5220\u9664</el-button>\n          </template>\n        </el-table-column>\n      </el-table></el-form\n    >\n  </el-dialog>\n</template>\n\n<script>\nexport default {\n  name: "AddMilestone",\n  data() {\n    const defaultTemplateMilestones = [];\n\n    for (let i = 1; i < 6; i += 1) {\n      defaultTemplateMilestones.push({\n        importanceFlag: false,\n\n        // \u521d\u59cb\u65f6\u5019\u4e5f\u7528\u524d\u7aef\u81ea\u5efaid\n        locId: `${i}`,\n        milestonesName: `\u8bf7\u4fee\u6539\u91cc\u7a0b\u7891\u540d\u79f0`,\n        // orderNum: 0,\n        startEndStatus: 0,\n        workDays: 5,\n      });\n    }\n    const defaultFormModel = {\n      templateName: "",\n      templateUsage: "",\n      owner: "",\n      planType: "",\n      projectPlanMilestonesDTOList: [],\n    };\n\n    // \u9a8c\u8bc1\u4e0d\u91cd\u540d\u81ea\u5b9a\u4e49rule\n    const validateMilestonesNameRule = (rule, value, callback) => {\n      if (\n        this.formModel.projectPlanMilestonesDTOList.reduce(\n          (o, n) => (n.milestonesName === value ? o + 1 : o),\n          0\n        ) > 1\n      ) {\n        callback(new Error("\u91cc\u7a0b\u7891\u540d\u4e0d\u80fd\u76f8\u540c"));\n      } else {\n        callback();\n      }\n    };\n\n    // \u65f6\u95f4\u5fc5\u987b\u6bd4\u4e0b\u4e00\u9879\u53ef\u53d8table\u8868\u5355\u65e9\u7684\u9a8c\u8bc1rule\n    const validateExpectedFinishTimeRule = (rule, value, callback) => {\n      console.log("rule.field", rule.field);\n\n      // i\u6ca1\u627e\u5230\u76f4\u63a5\u53d6\u7684\u65b9\u6cd5\uff0c\u4ecerule.field\u91cc\u66f2\u7ebf\u83b7\u5f97\n      const i = Number(\n        rule.field.slice(rule.field.indexOf("[") + 1, rule.field.indexOf("]"))\n      );\n      const thisOne = dayjs(value).valueOf();\n      const nextOne = dayjs(\n        this.formModel.projectPlanMilestonesDTOList[i + 1]\n          ?.expectedFinishTime ?? 0\n      ).valueOf();\n\n      if (value != null && String(value).trim() !== "") {\n        if (\n          this.formModel.projectPlanMilestonesDTOList[i + 1] &&\n          thisOne > nextOne\n        ) {\n          callback(new Error(timeErrorMessage));\n        } else {\n          callback();\n        }\n      } else {\n        callback(new Error("\u8bf7\u586b\u65f6\u95f4\uff01\uff01\uff01\uff01"));\n      }\n    };\n\n    return {\n      visible: false,\n\n      // \u56e0\u4e3a\u65b0\u589e\u7684\u80af\u5b9a\u6ca1\u6709\u6570\u636e\u5e93id\uff0c\u6240\u4ee5\u524d\u7aef\u8868\u5355id\u7edf\u4e00\u7528\u524d\u7aef\u81ea\u5efaid\uff0c\u5904\u7406\u8d77\u6765\u66f4\u7b80\u6d01\u3002\u800c\u4e0d\u662f\u62c9\u4e0b\u6765\u65f6\u62fc\u63a5\u63d0\u4ea4\u7684\u65f6\u5019\u518d\u5207\u56de\u539f\u6837\u3002\n      // \u540e\u7aef\u7684id\u5c31\u8ba9\u5b83\u81ea\u5df1\u6765\u7684\u65f6\u5019\u548c\u63d0\u4ea4\u7684\u65f6\u5019\u90fd\u81ea\u7136\u7684\u5e26\u7740\n      localIndex: 1000,\n      defaultTemplateMilestones,\n      defaultFormModel,\n      formModel: {\n        id: 0,\n        startTime: undefined,\n\n        // \u8fd9\u91cc\u548c\u91cd\u7f6e\u7684\u65f6\u5019\uff0c\u7ed9\u8868\u5355\u7684\u8868\u5355\u8d4b\u503c\u65f6\u5982\u679c\u591a\u5c42\u9700\u8981cloneDeep\uff0c\u5426\u5219\u5c06\u6765default\u503c\u4f1a\u88ab\u610f\u5916\u4fee\u6539\n        projectPlanMilestonesDTOList: cloneDeep(this.defaultTemplateMilestones),\n      },\n\n      rules: {\n        startTime: [{ required: true, message: "\u8bf7\u9009\u5219\u65e5\u671f" }],\n        mark: [{ required: true, message: "\u8bf7\u8f93\u5165" }],\n        owner: [{ required: true, message: "\u8bf7\u9009\u62e9" }],\n        planType: [{ required: true, message: "\u8bf7\u9009\u62e9" }],\n        projectPlanMilestonesDTOList: {\n          milestonesName: [\n            { required: true, message: "\u8bf7\u8f93\u5165\u91cc\u7a0b\u7891\u540d\u79f0" },\n            { validator: validateMilestonesNameRule, trigger: "blur" },\n          ],\n          expectedFinishTime: [\n            { required: true, message: "\u8bf7\u9009\u62e9\u65f6\u95f4" },\n            { validator: validateExpectedFinishTimeRule, trigger: "blur" },\n          ],\n        },\n      },\n    };\n  },\n  methods: {\n    rowDrop() {\n      // \u6b64\u65f6\u627e\u5230\u7684\u5143\u7d20\u662f\u8981\u62d6\u62fd\u5143\u7d20\u7684\u7236\u5bb9\u5668 \u4e00\u6b21\u4ee5\u4e0a\u4f7f\u7528\u7ec4\u4ef6\u65f6\u9700\u8981\u4fdd\u8bc1\u9009\u4e2d\u6253\u5f00\u5f39\u6846\u7684\u90a3\u4e2a\u7ec4\u4ef6\uff0c\u901a\u8fc7activeListTable\n      const tbody = document.querySelector(\n        ".activeListTable .el-table__body-wrapper tbody"\n      );\n      const _this = this;\n\n      Sortable.create(tbody, {\n        //  \u6307\u5b9a\u53ef\u88ab\u62d6\u62fd\u800c\u79fb\u52a8\u7684\u5355\u5143\u6574\u4f53\n        draggable: ".activeListTableOuter .el-table__row",\n\n        // \u8bbe\u7f6e\u53ea\u63a5\u53d7\u62d6\u62fd\u64cd\u4f5c\u4e8b\u4ef6\u7684dom\uff08\u4e00\u822c\u4e3a\u4e00\u4e2a\u62d6\u62fd\u56fe\u6807\uff09\uff0c\u4e0d\u6307\u5b9a\u7684\u5219\u4e3a\u6574\u884c\u90fd\u80fd\u62d6\u62fd\n        handle: ".drag",\n        onEnd({ newIndex, oldIndex }) {\n          const currRow = _this.formModel.projectPlanMilestonesDTOList.splice(\n            oldIndex,\n            1\n          )[0];\n\n          _this.formModel.projectPlanMilestonesDTOList.splice(\n            newIndex,\n            0,\n            currRow\n          );\n          _this.validate();\n        },\n      });\n    },\n    addOne() {\n      // \u524d\u7aef\u8868\u5355id\u90fd\u7528\u524d\u7aef\u81ea\u5efaid\n      this.localIndex += 1;\n      this.formModel.templateMilestones.push({\n        importanceFlag: false,\n        locId: `${String(this.localIndex)}`,\n        milestonesName: `\u8bf7\u8f93\u5165\u91cc\u7a0b\u7891`,\n        // orderNum: 0,\n        startEndStatus: 0,\n        workDays: 5,\n      });\n      this.$nextTick(() => {\n        this.$refs.formModel.validate();\n      });\n    },\n    delOne(item) {\n      const i = this.formModel.projectPlanMilestonesDTOList.reduce(\n        (o, n, i) => (n.locId === item.locId ? i : o),\n        0\n      );\n\n      this.formModel.projectPlanMilestonesDTOList.splice(i, 1);\n      this.validate();\n    },\n    async handleSubmit() {\n      this.$refs.formModel.validate(async (valid, ...re) => {\n        if (valid) {\n          this.finishSave();\n        } else {\n          let count = 0;\n\n          // \u5904\u7406\u65f6\u95f4\u6392\u5e8f\u9a8c\u8bc1\u4e0d\u901a\u8fc7\u4e5f\u9700\u8981\u53ef\u4ee5\u4fdd\u5b58\u7684\u60c5\u51b5\n          if (re.length && re.length > 0) {\n            for (const [key, value] of Object.entries(re[0])) {\n              // console.log(key + \':\' + value)\n              if (key.indexOf("expectedFinishTime") > -1) {\n                if (!(value[0].message.indexOf(timeErrorMessage) > -1)) {\n                  // console.log(value[0].message, timeErrorMessage, value[0].message.indexOf(timeErrorMessage))\n\n                  count += 1;\n                }\n              } else count += 1;\n            }\n          }\n\n          // \u5b58\u5728\u6392\u5e8f\u9519\u8bef\u4ee5\u5916\u7684\u9519\u8bef\n          if (count > 0) {\n            return false;\n          } else {\n            // return false\n            this.finishSave();\n          }\n        }\n      });\n    },\n    async finishSave() {\n      const p = cloneDeep(this.formModel);\n\n      p.projectPlanMilestonesDTOList.forEach((item, i) => {\n        item.orderNum = i;\n      });\n\n      if (this.editTemplate) {\n        await updateProjectPlanMilestones(p);\n      } else {\n        await createProjectPlanTemplate(p);\n      }\n      this.$message.success("\u4fdd\u5b58\u6210\u529f");\n      this.refresh();\n      this.visible = false;\n\n      // \u8fd9\u91cc\u548c\u521d\u59cb\u5316\u7684\u65f6\u5019\u7ed9\u8868\u5355\u7684\u8868\u5355\u8d4b\u521d\u59cb\u503c\u65f6\u5982\u679c\u591a\u5c42\u9700\u8981cloneDeep\uff0c\u5426\u5219\u5c06\u6765default\u503c\u4f1a\u88ab\u610f\u5916\u4fee\u6539\n      this.formModel.projectPlanMilestonesDTOList = cloneDeep(\n        this.defaultFormModel\n      );\n    },\n    validate() {\n      this.$nextTick(() => {\n        this.$refs.formModel.validate();\n      });\n    },\n  },\n};\n<\/script>\n')),(0,a.kt)("h3",{id:"table-\u5355\u5143\u683c\u9519\u4e71"},"table \u5355\u5143\u683c\u9519\u4e71"),(0,a.kt)("p",null,"\u56e0\u4e3a vue \u540c dom \u7b97\u6cd5\u4f18\u5316\u539f\u56e0\uff0c\u5728 el-table-column \u4e0a\u7528 v-if \u4f1a\u4f7f vue \u8bef\u5224\u4f18\u5316 dom \u6027\u80fd\u5bfc\u81f4\u9519\u4f4d\uff0c\u7ed9'<'el-table-column key='a''>'\u52a0\u4e0a\u4e0d\u540c key \u5c31\u80fd\u89e3\u51b3"),(0,a.kt)("h3",{id:"el-dialog-\u5d4c\u5957"},"el-dialog \u5d4c\u5957"),(0,a.kt)("p",null,"\u5d4c\u5957 el-dialog \u5185\u90e8 dialog \u4f1a\u6709\u663e\u793a\u95ee\u9898\uff0c\u9700\u8981\u5c06\u5185\u90e8 dialog \u8bbe\u7f6e\u5230 body \u4e0a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},'<template>\n  <el-dialog\n    :visible.sync="visible"\n    :modal-append-to-body="true"\n    :append-to-body="true"\n  >\n    111\n  </el-dialog>\n</template>\n')),(0,a.kt)("h3",{id:"el-select-\u81ea\u52a8\u5c55\u5f00"},"el-select \u81ea\u52a8\u5c55\u5f00"),(0,a.kt)("p",null,"\u9690\u85cf\u5c5e\u6027 automatic-dropdown\uff0c\u4e3a true \u65f6\u53ef\u4ee5\u81ea\u52a8\u5c55\u5f00"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},'\x3c!--@after-enter="opened" \u8fd9\u91cc\u5fc5\u987b\u8981\u5728\u6253\u5f00\u5f39\u6846\u540e\u805a\u7126select\uff0cselect\u7684\u81ea\u52a8\u4e0b\u62c9\u529f\u80fd\u624d\u4f1a\u6709\u6548--\x3e\n<el-popover v-model="visible" trigger="manual" @after-enter="opened">\n\n\x3c!--\u9690\u85cf\u5c5e\u6027 automatic-dropdown \u53ef\u4ee5\u4f7f\u4e0b\u62c9\u81ea\u52a8\u6253\u5f00\uff0c\u5fc5\u987b\u805a\u7126\u624d\u6709\u6548\u679c--\x3e\n  <el-select :automatic-dropdown="true">\n    <el-option>\u9009\u98791</el-option>\n    <el-option>\u9009\u98792</el-option>\n  </el-select>\n</el-popover>\n\n<script>\n\nexport default {\n  name: \'FinishFilterPopover\',\n  methods: {\n    opened() {\n      this.$refs.selectRef.focus()\n    },\n  }\n}\n<\/script>\n')),(0,a.kt)("p",null,"\u5173\u952e\u8bcd\u9ad8\u4eae"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-vue"},'<el-select\n  v-model.trim="keyWord"\n  class="searchInput"\n  filterable\n  remote\n  clearable\n  placeholder="\u8bf7\u8f93\u5165\u7f16\u53f7/\u9879\u76ee/\u5206\u652f\u540d"\n  :remote-method="remoteMethod"\n  :loading="searchLoading"\n  width="420"\n  @change="change"\n>\n  <template v-if="searchOptions.length > 0">\n    <div class="optionTitle">\u7f16\u53f7</div>\n  \x3c!-- el-option\u4e2d\u5343\u4e07\u4e0d\u8981\u5199 :label="item.keyWord" \u5426\u5219\u81ea\u5b9a\u4e49\u7684option v-html\u4f1a\u88ab\u518d\u6b21\u8986\u76d6\uff0c\u65e0\u6cd5\u505a\u9ad8\u4eae--\x3e\n\n    <el-option\n      v-for="item in searchOptions"\n      :key="item.keyWord"\n      :value="item.keyWord"\n    >\n      <span v-html="showData(item.keyWord)" />\n    </el-option>\n  </template>\n</el-select>\n\n<script>\nexport default {\n  name: "selectHighLight",\n  data() {\n    return {\n      searchInputSave: \'\', // select\u641c\u7d22\u6846\u4e2d\u7684\u5b57\uff0c\u4e0d\u662fv-modal\n      keyWord: \'\', // select\u9009\u62e9\u540e\u4f1a\u53d8\u5316\u7684\u503c\uff0c\u662fv-modal\n      searchOptions: [],\n      searchLoading: false,\n    };\n  },\n  methods: {\n\n    // \u5ffd\u7565\u5927\u5c0f\u5199\u7684\u5339\u914d\u9ad8\u4eae\n    showData(val){\n      const strKeyWord = this.searchInputSave // \u9700\u8981\u5339\u914d\u7684\u5173\u952e\u8bcd\n\n      // i\u4ee3\u8868\u5ffd\u7565\u5927\u5c0f\u5199\uff0cg\u4ee3\u8868\u5168\u5c40\u5339\u914d\uff0c\u4e0d\u52a0g\u53ef\u4ee5\u7406\u89e3\u4e3astr.replace(\'Ab\')\uff0c\u52a0g\u4e3areplaceAll(\'Ab\')\uff0c\u6b64\u5904\'Ab\'\u4e0d\u533a\u5206\u5927\u5c0f\u5199\uff08\u6b63\u5219\u4e0d\u80fd\u653e\u5728replaceAll\u4e2d\uff09\n      return val?.replace(\n        new RegExp(\'(\' + strKeyWord + \')\', \'ig\'), // filterValue\u4e3a\u641c\u7d22\u5b57\u6bb5\n\n        // $1\u4ee3\u8868\u6b63\u5219\u4e2d\u7b2c\u4e00\u4e2a\u5c0f\u62ec\u53f7"()"\u672c\u6b21\u7684\u5339\u914d\u7ed3\u679c,$2\u4e3a\u7b2c\u4e8c\u4e2a\uff0c\u4ee5\u6b64\u7c7b\u63a8\uff1b\n        `<span style=\'color: red\'>$1</span>`\n      )\n    },\n\n   // \u4e0d\u5ffd\u7565\u5927\u5c0f\u5199\u7684\u5339\u914d\u9ad8\u4eae\n   showData2(val){\n      const strKeyWord = this.searchInputSave // \u9700\u8981\u5339\u914d\u7684\u5173\u952e\u8bcd\n\n      return val?.replace(\n        new RegExp(this.searchInputSave, \'g\'), // filterValue\u4e3a\u641c\u7d22\u5b57\u6bb5\n        `<span style=\'color: red\'>${this.searchInputSave}</span>`\n      )\n    },\n    change(val) {\n      // \u9009\u62e9\u4e4b\u540e\u518d\u62c9\u4e0b\u62c9\u6846\uff0c\u4f46\u662f\u4e0d\u8f93\u5165\u4e0d\u4f1a\u89e6\u53d1remoteMethod\uff0c\u6240\u4ee5\u8fd9\u91cc\u9700\u8981\u540c\u6b65\u4e00\u4e0b\n      this.searchInputSave = val\n    },\n    async remoteMethod(val) {\n\n      //\n      this.searchInputSave = val\n      if (val !== \'\') {\n        this.searchLoading = true\n        try {\n          const res = await remoteReq(val)\n\n          this.searchOptions = res?.data ?? []\n        } finally {\n          this.searchLoading = false\n        }\n      } else {\n        this.searchOptions = []\n      }\n    },\n\n  },\n};\n<\/script>\n')))}p.isMDXComponent=!0}}]);