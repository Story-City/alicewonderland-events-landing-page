export const STORY_NAME = 'Alice Through The Tear'
const STORY_ID = '019f70ed-249a-7c1f-8711-cc11cec44cb6'
export const STORY_APP_URL = `https://links.storycity.app/story/${STORY_ID}`
export const STORY_ANDROID_INTENT_URL = `intent://story/${STORY_ID}#Intent;scheme=storycity;package=au.com.storycity.storycity;S.browser_fallback_url=${encodeURIComponent(STORY_APP_URL)};end`
