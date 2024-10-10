import { MdHomeFilled } from 'react-icons/md'
import { BiSolidMoviePlay } from 'react-icons/bi'
import { PiTelevisionFill } from 'react-icons/pi'
import { IoSearchOutline } from 'react-icons/io5'

export const navigation = [
    {
        label : 'Movies',
        href : 'movie',
        icon : <BiSolidMoviePlay/>
    },
    {
      label : 'TV Series',
      href : 'tv',
      icon : <PiTelevisionFill/>
    }
]

export const mobileNavigation = [
    {
        label : "Home",
        href : "/",
        icon : <MdHomeFilled />
    },
    {
        label : "Search",
        href : "search",
        icon : <IoSearchOutline />
    },
    {
        label : 'Movie',
        href : 'movie',
        icon : <BiSolidMoviePlay/>
    },
    {
      label : 'TV Series',
      href : 'tv',
      icon : <PiTelevisionFill/>
    },
]