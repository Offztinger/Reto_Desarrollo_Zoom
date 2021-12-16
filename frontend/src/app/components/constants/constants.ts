const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IlZwaHBaakx1UVl1ZUR1VkViT2Z4VnciLCJleHAiOjE2NDAyOTE1MjgsImlhdCI6MTYzOTY4NjcyOX0.TWmGPpJK5ap469DnbBZCmdvrrb2P1sn9hhsz0JkCd-o';
const APIKey = 'VphpZjLuQYueDuVEbOfxVw';
const url = 'https://api.zoom.us/v2/users/me/meetings';

export const exampleData = {
  topic: 'EjemploReu2',
  type: 2,
  start_time: '2022-02-28T18:00:10',
  duration: '45',

  settings: {
    host_video: true,
    participant_video: true,
    join_before_host: true,
    mute_upon_entry: 'true',
    watermark: 'false',
    audio: 'voip',
    auto_recording: 'cloud',
  },
};

export async function getData() {
  const res = await fetch(url, {
    method: 'GET',

    mode: 'no-cors',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: '*/*',
      'Content-Type': 'application/json',
    },
    referrerPolicy: 'no-referrer',
  });

  return res.json();
}

export async function postData(data = {}) {
  const res = await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: '*/*',
    },
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });

  return res.json();
}
