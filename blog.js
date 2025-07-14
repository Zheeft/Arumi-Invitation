fetch('posts.json')
  .then(res => res.json())
  .then(posts => {
    const container = document.getElementById('blog-container');
    posts.forEach(post => {
      const card = document.createElement('article');
      card.className = 'blog-card';
      card.innerHTML = `
        <h3>${post.title} document.getElementById('date').textContent = post.date;
          </h3>
        <p>${post.excerpt}</p>
        <a.href = `artikel.html?id=${post.id}`;
      `;
      container.appendChild(card);
    });
  });
