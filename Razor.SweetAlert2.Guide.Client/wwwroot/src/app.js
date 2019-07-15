window.setTheme = (themeNumber) => {
  let fileName = "";

  const themeTag = document.getElementById('stTheme');
  if (themeTag) {
    themeTag.parentNode.removeChild(themeTag);
  }

  switch (themeNumber) {
    case 0:
    default: {
      return;
    }
    case 1: {
      fileName = "darkTheme.min.css";
      break;
    }
    case 2: {
      fileName = "minimalTheme.min.css";
      break;
    }
    case 3: {
      fileName = "borderlessTheme.min.css";
      break;
    }
  }

  const head = document.getElementsByTagName("head")[0];
  const styleTag = document.createElement("link");
  styleTag.rel = "stylesheet";
  styleTag.href = `_content/CurrieTechnologies.Blazor.SweetAlert2/${fileName}`;
  styleTag.id = 'stTheme';
  head.appendChild(styleTag);
}

window.normalAlert = () => {
  window.alert('You clicked the button!');
}
