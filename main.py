import execjs

with open('./articleList/origin_script.js', 'r', encoding='utf-8') as f:
    jstext = f.read()

ctx = execjs.compile(jstext)
url = 'https://edith.xiaohongshu.com/api/sns/web/v1/user_posted?num=30&cursor=6372084d000000002301ca80&user_id=5c0f2c34000000000701e15c'
result = ctx.call('sign', url)
print(result)