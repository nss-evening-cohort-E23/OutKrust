import renderToDom from '../../utils/renderToDom';

const welcomeVideo = () => {
  const welcomeString = `
  <div class="accordion hip-hop accordion-flush" id="hipHopAccordion">
  <div class="accordion-item hip-hop">
    <h2 class="accordion-header hip-hop">
      <button class="accordion-button collapsed hip-hop" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
       This is Hip Hop
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/vfTQfHjxFtw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</div>`;

  renderToDom('#hip-hop', welcomeString);
};

export default welcomeVideo;
