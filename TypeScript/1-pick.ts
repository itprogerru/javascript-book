
/* есть два типа нужно правильно сопоставить */

interface State {
    userId: string;
    pageTitle: string;
    recentFiles: string[];
    pageContents: string;
}
interface TopNavState {
    userId: string;
    pageTitle: string;
    recentFiles: string;
}

type TTopNavState = {
        userId: State['userId'];
        pageTitle: State['pageTitle'];
        recentFiles: State['recentFiles'];
};
type TTopNavState2 = {
    [k in 'userId' | 'pageTitle' | 'recentFiles']: State[k]
};

type TTopNavState3 = Pick<State, "userId" | "pageTitle" | "recentFiles">
