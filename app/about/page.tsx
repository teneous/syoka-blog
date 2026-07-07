import { Authors, allAuthors } from 'contentlayer/generated'
import AuthorLayout from '@/components/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import LocalizedText from '@/components/common/LocalizedText'

const interests = [
  {
    en: 'AI Agent & agent infrastructure ecosystems',
    zh: 'AI Agent & Agent 基建生态',
  },
  {
    en: 'System architecture',
    zh: '系统架构',
  },
  {
    en: 'Data platforms',
    zh: '数据平台',
  },
]

const conversations = [
  {
    en: 'People interested in AI agents, system architecture, and data platforms',
    zh: '对 AI Agent、系统架构、数据平台方向感兴趣的人',
  },
  {
    en: 'Long-term observations, practice, and questions around this field',
    zh: '对这个赛道有长期观察、实践或问题意识的人',
  },
  {
    en: 'Ongoing conversations about technical trends, engineering practice, and product forms',
    zh: '关于技术趋势、工程实践和产品形态的长期交流',
  },
]

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)

  return (
    <AuthorLayout content={mainContent}>
      <div className="space-y-10">
        <section>
          <h2 className="flex items-center gap-2.5">
            <span className="h-2 w-2 shrink-0 rounded-sm bg-violet-600 dark:bg-indigo-400" />
            <LocalizedText en="Profile" zh="简介" />
          </h2>
          <p>
            <LocalizedText
              en="I mainly focus on AI Agent & agent infrastructure ecosystems, system architecture, and data platforms."
              zh="我主要关注 AI Agent & Agent 基建生态、系统架构、数据平台。"
            />
          </p>
          <p>
            <LocalizedText
              en="This site records technical judgment, project practice, and long-term observations, so it is easier to keep thoughtful conversations with people interested in these directions."
              zh="这个站点会记录一些技术判断、项目实践和长期观察，方便和对这些方向感兴趣的人保持交流。"
            />
          </p>
        </section>

        <section>
          <h2 className="flex items-center gap-2.5">
            <span className="h-2 w-2 shrink-0 rounded-sm bg-violet-600 dark:bg-indigo-400" />
            <LocalizedText en="Directions" zh="关注方向" />
          </h2>
          <ul>
            {interests.map((item) => (
              <li key={item.en}>
                <LocalizedText en={item.en} zh={item.zh} />
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="flex items-center gap-2.5">
            <span className="h-2 w-2 shrink-0 rounded-sm bg-violet-600 dark:bg-indigo-400" />
            <LocalizedText en="Ongoing Conversations" zh="长期交流" />
          </h2>
          <ul>
            {conversations.map((item) => (
              <li key={item.en}>
                <LocalizedText en={item.en} zh={item.zh} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </AuthorLayout>
  )
}
