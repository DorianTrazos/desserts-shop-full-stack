import {
	StyledButtonFilter,
	StyledFilters,
	StyledHeader
} from './header.styles';

const Header = ({ filterActive, setFilterActive }) => {
	return (
		<StyledHeader>
			<h1>DESSERTS</h1>
			<StyledFilters>
				<StyledButtonFilter
					$filterActive={filterActive}
					$currentButton={0}
					onClick={() => setFilterActive(0)}
				>
					Default
				</StyledButtonFilter>
				<StyledButtonFilter
					$filterActive={filterActive}
					$currentButton={1}
					onClick={() => setFilterActive(1)}
				>
					Name
				</StyledButtonFilter>
				<StyledButtonFilter
					$filterActive={filterActive}
					$currentButton={2}
					onClick={() => setFilterActive(2)}
				>
					Price
				</StyledButtonFilter>
			</StyledFilters>
		</StyledHeader>
	);
};

export default Header;
