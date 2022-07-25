console.log(fetch('https://graph.instagram.com/17841400708603821?fields=id,media_type,media_url,username,timestamp&access_token=IGQVJXaElvcnRQSzlsNk96ZAF9JYVRKbWhxTjBxVjVfTC1adWhmRE5LTmhVNW04NWNBX1VXS0tKcHBYYXM5U1NpNGQyTEhjU0ZA4WWVZAQndJa0wxVmM5SVFuTE52SDVQSDNmOENSRjhYX3FSYUJGZAFlCNXpsa1JYU3FhNjE0').then((response) => response.json()).then((data) => console.log(data)));

