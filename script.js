document.addEventListener('DOMContentLoaded', init);

function init() {
  var yearEl = document.getElementById('year');
    if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
      startRoleRotator();
      }

      function startRoleRotator() {
        var roles = ['AI/ML Model Validation', 'LLM & GenAI Evaluation', 'AI Safety & Adversarial Testing', 'Automation Frameworks', 'Security Research'];
          var el = document.getElementById('role-line');
            if (!el) { return; }
              var i = 0;
                showRole();
                  setInterval(showRole, 2600);
                    function showRole() {
                        el.style.opacity = 0;
                            setTimeout(revealRole, 300);
                              }
                                function revealRole() {
                                    el.textContent = roles[i];
                                        el.style.opacity = 1;
                                            i = (i + 1) % roles.length;
                                              }
                                              }

                                              }
                                              
