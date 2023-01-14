export default {
  project: {
    link: 'https://github.com/shuding/nextra',
  },
  logo: <span>SMART BANKING</span>,
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return (
          <div style={{ background: 'cyan', textAlign: 'center' }}>{title}</div>
        );
      }
      if (title === 'About') {
        return <>❓ {title}</>;
      }
      return <>👉 {title}</>;
    },
  },
};
