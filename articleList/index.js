const request = require('request-promise')


const sign = require('./origin_script')



module.exports = async ({url}) => {
  const userId = url.match(/\/profile\/((.)*)$/)[1]

  const signLink = `/api/sns/web/v1/user_posted?num=30&cursor=&user_id=${userId}`
  const xst = await sign(signLink)

  const body = await request({
    url: `https://edith.xiaohongshu.com/api/sns/web/v1/user_posted?num=30&cursor=&user_id=${userId}`,
    headers: {
      cookie: 'web_session=040069b557d9bb1b7f85def405364bbda45e95;',
      ...xst,
    },
    json: true,
  })

  console.log(body);
}
