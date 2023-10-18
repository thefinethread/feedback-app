import { useState } from 'react';

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);

  const handleChange = (e) => {
    setSelected(+e.target.value);
    select(+e.target.value);
  };

  return (
    <ul className="ratings flex">
      <li>
        <input
          type="radio"
          value="1"
          id="num1"
          name="rating"
          checked={selected === 1}
          onChange={handleChange}
        />
        <label className="flex" htmlFor="num1">
          1
        </label>
      </li>
      <li>
        <input
          type="radio"
          value="2"
          id="num2"
          name="rating"
          checked={selected === 2}
          onChange={handleChange}
        />
        <label className="flex" htmlFor="num2">
          2
        </label>
      </li>
      <li>
        <input
          type="radio"
          value="3"
          id="num3"
          name="rating"
          checked={selected === 3}
          onChange={handleChange}
        />
        <label className="flex" htmlFor="num3">
          3
        </label>
      </li>
      <li>
        <input
          type="radio"
          value="4"
          id="num4"
          name="rating"
          checked={selected === 4}
          onChange={handleChange}
        />
        <label className="flex" htmlFor="num4">
          4
        </label>
      </li>
      <li>
        <input
          type="radio"
          value="5"
          id="num5"
          name="rating"
          checked={selected === 5}
          onChange={handleChange}
        />
        <label className="flex" htmlFor="num5">
          5
        </label>
      </li>
      <li>
        <input
          type="radio"
          value="6"
          id="num6"
          name="rating"
          checked={selected === 6}
          onChange={handleChange}
        />
        <label className="flex" htmlFor="num6">
          6
        </label>
      </li>
      <li>
        <input
          type="radio"
          value="7"
          id="num7"
          name="rating"
          checked={selected === 7}
          onChange={handleChange}
        />
        <label className="flex" htmlFor="num7">
          7
        </label>
      </li>
      <li>
        <input
          type="radio"
          value="8"
          id="num8"
          name="rating"
          checked={selected === 8}
          onChange={handleChange}
        />
        <label className="flex" htmlFor="num8">
          8
        </label>
      </li>
      <li>
        <input
          type="radio"
          value="9"
          id="num9"
          name="rating"
          checked={selected === 9}
          onChange={handleChange}
        />
        <label className="flex" htmlFor="num9">
          9
        </label>
      </li>
      <li>
        <input
          type="radio"
          value="10"
          id="num10"
          name="rating"
          checked={selected === 10}
          onChange={handleChange}
        />
        <label className="flex" htmlFor="num10">
          10
        </label>
      </li>
    </ul>
  );
};

export default RatingSelect;
