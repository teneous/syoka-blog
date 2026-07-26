import assert from 'node:assert/strict'
import test from 'node:test'
import { renderToStaticMarkup } from 'react-dom/server'
import headerNavLinks from '../data/headerNavLinks.ts'

let NavLinkContent
try {
  NavLinkContent = (await import('../components/navigation/NavLinkContent.ts')).default
} catch {
  NavLinkContent = undefined
}

test('investment product follows Works', () => {
  const worksIndex = headerNavLinks.findIndex((link) => link.title === 'Works')
  const investIndex = headerNavLinks.findIndex((link) => link.title === 'Invest')

  assert.equal(investIndex, worksIndex + 1)
})

test('investment product targets the chain URL', () => {
  const invest = headerNavLinks.find((link) => link.title === 'Invest')

  assert.equal(invest?.href, 'https://syoka.icu/chain/')
})

test('NEW is rendered as a compact visual badge', () => {
  assert.equal(typeof NavLinkContent, 'function')
  const markup = renderToStaticMarkup(NavLinkContent({ badge: 'NEW', children: '投资产品' }))

  assert.match(markup, /class="[^"]*rounded-full[^"]*"[^>]*>NEW<\/span>/)
})
