// Index to import all components together
// import '@hotosm/ui/components';

// Default Shoelace exports
import SlAlert from '@shoelace-style/shoelace/dist/components/alert/alert.component.js';
import SlAnimatedImage from '@shoelace-style/shoelace/dist/components/animated-image/animated-image.component.js';
import SlAnimation from '@shoelace-style/shoelace/dist/components/animation/animation.component.js';
import SlAvatar from '@shoelace-style/shoelace/dist/components/avatar/avatar.component.js';
import SlBadge from '@shoelace-style/shoelace/dist/components/badge/badge.component.js';
import SlBreadcrumb from '@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.component.js';
import SlBreadcrumbItem from '@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.component.js';
import SlButton from '@shoelace-style/shoelace/dist/components/button/button.component.js';
import SlButtonGroup from '@shoelace-style/shoelace/dist/components/button-group/button-group.component.js';
import SlCard from '@shoelace-style/shoelace/dist/components/card/card.component.js';
import SlCarousel from '@shoelace-style/shoelace/dist/components/carousel/carousel.component.js';
import SlCarouselItem from '@shoelace-style/shoelace/dist/components/carousel-item/carousel-item.component.js';
import SlCheckbox from '@shoelace-style/shoelace/dist/components/checkbox/checkbox.component.js';
import SlColorPicker from '@shoelace-style/shoelace/dist/components/color-picker/color-picker.component.js';
import SlCopyButton from '@shoelace-style/shoelace/dist/components/copy-button/copy-button.component.js';
import SlDetails from '@shoelace-style/shoelace/dist/components/details/details.component.js';
import SlDialog from '@shoelace-style/shoelace/dist/components/dialog/dialog.component.js';
import SlDivider from '@shoelace-style/shoelace/dist/components/divider/divider.component.js';
import SlDrawer from '@shoelace-style/shoelace/dist/components/drawer/drawer.component.js';
import SlDropdown from '@shoelace-style/shoelace/dist/components/dropdown/dropdown.component.js';
import SlFormatBytes from '@shoelace-style/shoelace/dist/components/format-bytes/format-bytes.component.js';
import SlFormatDate from '@shoelace-style/shoelace/dist/components/format-date/format-date.component.js';
import SlFormatNumber from '@shoelace-style/shoelace/dist/components/format-number/format-number.component.js';
import SlIcon from '@shoelace-style/shoelace/dist/components/icon/icon.component.js';
import SlIconButton from '@shoelace-style/shoelace/dist/components/icon-button/icon-button.component.js';
import SlImageComparer from '@shoelace-style/shoelace/dist/components/image-comparer/image-comparer.component.js';
import SlInclude from '@shoelace-style/shoelace/dist/components/include/include.component.js';
import SlInput from '@shoelace-style/shoelace/dist/components/input/input.component.js';
import SlMenu from '@shoelace-style/shoelace/dist/components/menu/menu.component.js';
import SlMenuItem from '@shoelace-style/shoelace/dist/components/menu-item/menu-item.component.js';
import SlMenuLabel from '@shoelace-style/shoelace/dist/components/menu-label/menu-label.component.js';
import SlMutationObserver from '@shoelace-style/shoelace/dist/components/mutation-observer/mutation-observer.component.js';
import SlOption from '@shoelace-style/shoelace/dist/components/option/option.component.js';
import SlPopup from '@shoelace-style/shoelace/dist/components/popup/popup.component.js';
import SlProgressBar from '@shoelace-style/shoelace/dist/components/progress-bar/progress-bar.component.js';
import SlProgressRing from '@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.component.js';
import SlQRCode from '@shoelace-style/shoelace/dist/components/qr-code/qr-code.component.js';
import SlRadio from '@shoelace-style/shoelace/dist/components/radio/radio.component.js';
import SlRadioButton from '@shoelace-style/shoelace/dist/components/radio-button/radio-button.component.js';
import SlRadioGroup from '@shoelace-style/shoelace/dist/components/radio-group/radio-group.component.js';
import SlRange from '@shoelace-style/shoelace/dist/components/range/range.component.js';
import SlRating from '@shoelace-style/shoelace/dist/components/rating/rating.component.js';
import SlRelativeTime from '@shoelace-style/shoelace/dist/components/relative-time/relative-time.component.js';
import SlResizeObserver from '@shoelace-style/shoelace/dist/components/resize-observer/resize-observer.component.js';
import SlSelect from '@shoelace-style/shoelace/dist/components/select/select.component.js';
import SlSkeleton from '@shoelace-style/shoelace/dist/components/skeleton/skeleton.component.js';
import SlSpinner from '@shoelace-style/shoelace/dist/components/spinner/spinner.component.js';
import SlSplitPanel from '@shoelace-style/shoelace/dist/components/split-panel/split-panel.component.js';
import SlSwitch from '@shoelace-style/shoelace/dist/components/switch/switch.component.js';
import SlTab from '@shoelace-style/shoelace/dist/components/tab/tab.component.js';
import SlTabGroup from '@shoelace-style/shoelace/dist/components/tab-group/tab-group.component.js';
import SlTabPanel from '@shoelace-style/shoelace/dist/components/tab-panel/tab-panel.component.js';
import SlTag from '@shoelace-style/shoelace/dist/components/tag/tag.component.js';
import SlTextarea from '@shoelace-style/shoelace/dist/components/textarea/textarea.component.js';
import SlTooltip from '@shoelace-style/shoelace/dist/components/tooltip/tooltip.component.js';
import SlTree from '@shoelace-style/shoelace/dist/components/tree/tree.component.js';
import SlTreeItem from '@shoelace-style/shoelace/dist/components/tree-item/tree-item.component.js';
import SlVisuallyHidden from '@shoelace-style/shoelace/dist/components/visually-hidden/visually-hidden.component.js';

// Custom composite components
import HotHeader from './header/header';
import HotToolbar from './toolbar/toolbar';
import HotTracking from './tracking/tracking';

// Define web component names for Shoelace components
SlAlert.define('hot-alert');
SlAnimatedImage.define('hot-animated-image');
SlAnimation.define('hot-animation');
SlAvatar.define('hot-avatar');
SlBadge.define('hot-badge');
SlBreadcrumb.define('hot-breadcrumb');
SlBreadcrumbItem.define('hot-breadcrumb-item');
SlButton.define('hot-button');
SlButtonGroup.define('hot-button-group');
SlCard.define('hot-card');
SlCarousel.define('hot-carousel');
SlCarouselItem.define('hot-carousel-item');
SlCheckbox.define('hot-checkbox');
SlColorPicker.define('hot-color-picker');
SlCopyButton.define('hot-copy-button');
SlDetails.define('hot-details');
SlDialog.define('hot-dialog');
SlDivider.define('hot-divider');
SlDrawer.define('hot-drawer');
SlDropdown.define('hot-dropdown');
SlFormatBytes.define('hot-format-bytes');
SlFormatDate.define('hot-format-date');
SlFormatNumber.define('hot-format-number');
SlIcon.define('hot-icon');
SlIconButton.define('hot-icon-button');
SlImageComparer.define('hot-image-comparer');
SlInclude.define('hot-include');
SlInput.define('hot-input');
SlMenu.define('hot-menu');
SlMenuItem.define('hot-menu-item');
SlMenuLabel.define('hot-menu-label');
SlMutationObserver.define('hot-mutation-observer');
SlOption.define('hot-option');
SlPopup.define('hot-popup');
SlProgressBar.define('hot-progress-bar');
SlProgressRing.define('hot-progress-ring');
SlQRCode.define('hot-qr-code');
SlRadio.define('hot-radio');
SlRadioButton.define('hot-radio-button');
SlRadioGroup.define('hot-radio-group');
SlRange.define('hot-range');
SlRating.define('hot-rating');
SlRelativeTime.define('hot-relative-time');
SlResizeObserver.define('hot-resize-observer');
SlSelect.define('hot-select');
SlSkeleton.define('hot-skeleton');
SlSpinner.define('hot-spinner');
SlSplitPanel.define('hot-split-panel');
SlSwitch.define('hot-switch');
SlTab.define('hot-tab');
SlTabGroup.define('hot-tab-group');
SlTabPanel.define('hot-tab-panel');
SlTag.define('hot-tag');
SlTextarea.define('hot-textarea');
SlTooltip.define('hot-tooltip');
SlTree.define('hot-tree');
SlTreeItem.define('hot-tree-item');
SlVisuallyHidden.define('hot-visually-hidden');

declare global {
    interface HTMLElementTagNameMap {
        'hot-alert': SlAlert;
        'hot-animated-image': SlAnimatedImage;
        'hot-animation': SlAnimation;
        'hot-avatar': SlAvatar;
        'hot-badge': SlBadge;
        'hot-breadcrumb': SlBreadcrumb;
        'hot-breadcrumb-item': SlBreadcrumbItem;
        'hot-button': SlButton;
        'hot-button-group': SlButtonGroup;
        'hot-card': SlCard;
        'hot-carousel': SlCarousel;
        'hot-carousel-item': SlCarouselItem;
        'hot-checkbox': SlCheckbox;
        'hot-color-picker': SlColorPicker;
        'hot-copy-button': SlCopyButton;
        'hot-details': SlDetails;
        'hot-dialog': SlDialog;
        'hot-divider': SlDivider;
        'hot-drawer': SlDrawer;
        'hot-dropdown': SlDropdown;
        'hot-format-bytes': SlFormatBytes;
        'hot-format-date': SlFormatDate;
        'hot-format-number': SlFormatNumber;
        'hot-icon': SlIcon;
        'hot-icon-button': SlIconButton;
        'hot-image-comparer': SlImageComparer;
        'hot-include': SlInclude;
        'hot-input': SlInput;
        'hot-menu': SlMenu;
        'hot-menu-item': SlMenuItem;
        'hot-menu-label': SlMenuLabel;
        'hot-mutation-observer': SlMutationObserver;
        'hot-option': SlOption;
        'hot-popup': SlPopup;
        'hot-progress-bar': SlProgressBar;
        'hot-progress-ring': SlProgressRing;
        'hot-qrcode': SlQRCode;
        'hot-radio': SlRadio;
        'hot-radio-button': SlRadioButton;
        'hot-radio-group': SlRadioGroup;
        'hot-range': SlRange;
        'hot-rating': SlRating;
        'hot-relative-time': SlRelativeTime;
        'hot-resize-observer': SlResizeObserver;
        'hot-select': SlSelect;
        'hot-skeleton': SlSkeleton;
        'hot-spinner': SlSpinner;
        'hot-split-panel': SlSplitPanel;
        'hot-switch': SlSwitch;
        'hot-tab': SlTab;
        'hot-tab-group': SlTabGroup;
        'hot-tab-panel': SlTabPanel;
        'hot-tag': SlTag;
        'hot-textarea': SlTextarea;
        'hot-tooltip': SlTooltip;
        'hot-tree': SlTree;
        'hot-tree-item': SlTreeItem;
        'hot-visually-hidden': SlVisuallyHidden;
        // Custom composite components
        'hot-header': HotHeader;
        'hot-toolbar': HotToolbar;
        'hot-tracking': HotTracking;
    }
}

export {
    SlAlert,
    SlAnimatedImage,
    SlAnimation,
    SlAvatar,
    SlBadge,
    SlBreadcrumb,
    SlBreadcrumbItem,
    SlButton,
    SlButtonGroup,
    SlCard,
    SlCarousel,
    SlCarouselItem,
    SlCheckbox,
    SlColorPicker,
    SlCopyButton,
    SlDetails,
    SlDialog,
    SlDivider,
    SlDrawer,
    SlDropdown,
    SlFormatBytes,
    SlFormatDate,
    SlFormatNumber,
    SlIcon,
    SlIconButton,
    SlImageComparer,
    SlInclude,
    SlInput,
    SlMenu,
    SlMenuItem,
    SlMenuLabel,
    SlMutationObserver,
    SlOption,
    SlPopup,
    SlProgressBar,
    SlProgressRing,
    SlQRCode,
    SlRadio,
    SlRadioButton,
    SlRadioGroup,
    SlRange,
    SlRating,
    SlRelativeTime,
    SlResizeObserver,
    SlSelect,
    SlSkeleton,
    SlSpinner,
    SlSplitPanel,
    SlSwitch,
    SlTab,
    SlTabGroup,
    SlTabPanel,
    SlTag,
    SlTextarea,
    SlTooltip,
    SlTree,
    SlTreeItem,
    SlVisuallyHidden,
    // Custom composite components
    HotHeader,
    HotToolbar,
    HotTracking,
}
