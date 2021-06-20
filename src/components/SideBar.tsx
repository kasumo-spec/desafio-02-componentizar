import {Button} from "./Button";

interface SideBarProps {
    genres: {
        id: number;
        name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
        title: string;
        map(element: (genre: { id: number; title: string; name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family' }) => JSX.Element): any;
    }
    click: (id: number) => void,
    selectedGenre: {
        id: number,
        name: string,
        title: string
    }
}


export function SideBar({genres, click, selectedGenre}:SideBarProps) {
    return(
    <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
            {genres.map((genre: { id: number; title: string; name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family'; }) => (
                <Button
                    key={String(genre.id)}
                    title={genre.title}
                    iconName={genre.name}
                    onClick={() => click(genre.id)}
                    selected={selectedGenre.id === genre.id}
                />
            ))}
        </div>

    </nav>)
}