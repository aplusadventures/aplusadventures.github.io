/* A+ Adventures - Gallery Stylesheet */

.page-header {
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('../images/gallery-header.jpg');
  background-size: cover;
  background-position: center;
  padding: 6rem 0;
  text-align: center;
  color: var(--white);
}

.page-header h1 {
  color: var(--white);
  font-size: 2.5rem;
}

.filter-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  border: 1px solid #ddd;
  background-color: var(--white);
  color: var(--dark-color);
  border-radius: 2rem;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 500;
}

.filter-btn:hover {
  background-color: #f0f0f0;
  border-color: #ccc;
}

.filter-btn.active {
  background-color: var(--primary-color);
  color: var(--white);
  border-color: var(--primary-color);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  aspect-ratio: 1 / 1;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease, filter 0.4s ease;
}

.gallery-item:hover img {
  transform: scale(1.1);
  filter: brightness(0.7);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-overlay span {
  color: var(--white);
  font-size: 2rem;
  transform: scale(0.8);
  transition: transform 0.4s ease;
}

.gallery-item:hover .gallery-overlay span {
  transform: scale(1);
}

/* Animation for filtering */
.gallery-item.hide {
  display: none;
}

@media (min-width: 768px) {
  .page-header h1 {
    font-size: 3rem;
  }
}
