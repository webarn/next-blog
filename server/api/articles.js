import { Router } from 'express'

const router = Router()


let article = [{
  title: 'Markdown概述(第一段)',
  content: 'Markdown 致力于使阅读和创作文档变得容易Markdown 视可读性为最高准则. Markdown 文件应该以纯文本形式原样发布, 不应该包含标记标签和格式化指令. 尽管 Markdown 的语法受到了以下这些 text-to-HTML 过滤器的影响 -- 包括 Setext, atx, Textile, reStructuredText, Grutatext, 还有 EtText -- 但是 Markdown 语法灵感最大的来源还是纯文本 email 的格式基于以上背景, Markdown 完全由标点符号组成, 这些标点经过仔细挑选以使他们看上去和表达的含义相同. 例如, 星号标记的单词就像 *强调*. 列表就像是列表. 如果你使用过 email 的话, 就连块引用都像引用的文本段落.',
  star: 999,
  updata_time: '2017-12-04'
},
{
  title: 'Markdown概述(第二段)',
  content: 'Markdown 致力于使阅读和创作文档变得容易Markdown 视可读性为最高准则. Markdown 文件应该以纯文本形式原样发布, 不应该包含标记标签和格式化指令. 尽管 Markdown 的语法受到了以下这些 text-to-HTML 过滤器的影响 -- 包括 Setext, atx, Textile, reStructuredText, Grutatext, 还有 EtText -- 但是 Markdown 语法灵感最大的来源还是纯文本 email 的格式基于以上背景, Markdown 完全由标点符号组成, 这些标点经过仔细挑选以使他们看上去和表达的含义相同. 例如, 星号标记的单词就像 *强调*. 列表就像是列表. 如果你使用过 email 的话, 就连块引用都像引用的文本段落.',
  star: 999,
  updata_time: '2017-12-04'
}]

router.get('/articles', (req, res, next) => {
  res.send({
    code: 200,
    data: article,
    mag: 'success'
  })
});
router.get('/article/:path', (req, res, next) => {
  res.send(req.params.path)
})



export default router
