const request = require('request-promise')


const sign = require('./origin_script')



module.exports = async ({url}) => {
  const note_id = url.match(/\/explore\/((.)*)$/)[1]

  const xst = await sign('/api/sns/web/v1/feed', {
    source_note_id: note_id
  })

  const body = await request({
    method: "POST",
    url: `https://edith.xiaohongshu.com/api/sns/web/v1/feed`,
    headers: {
      "content-type": "application/json;charset=UTF-8",
      cookie: 'web_session=040069b557d9bb1b7f85def405364bbda45e95;',
      ...xst,
    },
    body: {
      source_note_id: note_id,
    },
    json: true,
  })

  console.log(body);
}
