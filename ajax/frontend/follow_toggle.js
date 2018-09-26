class FollowToggle {
  constructor(el) {
    this.userId = el.data("user-id");
    this.followState = el.data("initial-follow-state");
    const $el = $(el);
    render();
  }
  
  render() {
    if (this.followState === "unfollowed") {
      $('body').append("Follow!");
    } else {
      $('body').append("unFollow!");
    }
  }
}





module.exports = FollowToggle; 