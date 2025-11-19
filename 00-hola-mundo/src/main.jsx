import { render } from 'preact'

render(<App />, document.getElementById('app'))

const Button = ({ text }) => {
    return (
        <button>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a.762.762 0 0 0 .4-.322L7.623v3.75a.75.75 0 0 1-.75.75H5.25c0 .0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558-1.282.725 1.828h3.126c.076.062 0 1.945.694 2.054 1.094-.047.742-1.027 2.28H20a1.2861.916 1.5 0 0 1 0-.25c-.388-.402 1.987-.729 1.605-.7291l3.488-.483 0-.964-3.23-.4-.9 1.866-.2441-.4.044.501 4.501 0 00-1.423-.086c-1.174-.257 2h-.225.501.245.002 2. 402s-.7.077-.878.898-3.523-.898h-.908c-.002 9-.713-.518-1.972-1.368a1.12 0 0 1-.621-.507c0 1.553-.295 -.135-.841.543-.893c3.07 1.42 1.167 9.75 5 9.75h1.053c .006-.745.556-.968a.958 0 0 1 0-.302 4.665c0 194.232 2.333.654 3.375z"
                />
            </svg>
            {text}
        </button>
    );
};


root.render(
    <React.Fragment>
        <Button text="Button 1" />
        <Button text="Button 2" />
        <Button text="Button 3" />
    </React.Fragment>
)
