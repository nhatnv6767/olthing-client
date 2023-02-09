import useSticky from '../hooks/use-sticky'
import { useState } from 'react'
import useCartInfo from '../hooks/use-cart-info'
import { useSelector } from 'react-redux'

const Header = ({ style_2 = false }) => {
  const { sticky } = useSticky()
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)
  const { quantity } = useCartInfo()
  const { wishlist } = useSelector((state) => state.whishlist)
  const { user: userInfo } = useSelector((state) => state.auth)
  return (
    <>
      <header>
        <div className={`header__area ${style_2 ? '' : 'header__transparent'}`}>
          <div
            className={`header__bottom-13 header__padding-7 header__black-3 header__bottom-border-4 ${
              style_2 ? 'header__bottom-13-white' : 'grey-bg-17'
            } header__sticky ${sticky ? 'header-sticky' : ''}
            `}
            id="header-sticky"
          >
            <div className="container-fluid">
              1111
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header