import './styles.css';
import clown from '../../components/img/pogo.png';

const Progress = () => {
  return (
    <body>
      <header className="header">
        <img className="clown" src={clown} />
        <h1>Como foi a sua Experiência ?</h1>
      </header>
      <div className="container">
        <input
          type="radio"
          class="radio"
          name="progress"
          value="bad"
          id="bad"
          checked
        />
        <label for="ok" class="label">
          {' '}
          Ruim{' '}
        </label>
        <input
          type="radio"
          class="radio"
          name="progress"
          value="ok"
          id="ok"
          checked
        />
        <label for="ok" class="label">
          {' '}
          Média{' '}
        </label>
        <input
          type="radio"
          class="radio"
          name="progress"
          value="awesome"
          id="awesome"
          checked
        />
        <label for="awesome" class="label">
          {' '}
          Incrível!!!{' '}
        </label>
        <div className="progress">
          <div className="progress-bar"></div>
        </div>
      </div>
    </body>
  );
};

export default Progress;
