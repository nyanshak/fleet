import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import labelInterface from 'interfaces/label';
import PanelGroupItem from 'components/side_panels/HostSidePanel/PanelGroupItem';
import statusLabelsInterface from 'interfaces/status_labels';

class PanelGroup extends Component {
  static propTypes = {
    groupItems: PropTypes.arrayOf(labelInterface),
    onLabelClick: PropTypes.func,
    selectedFilter: PropTypes.string,
    statusLabels: statusLabelsInterface,
    type: PropTypes.string,
  };

  static defaultProps = {
    onLabelClick: noop,
  };

  renderGroupItem = (item) => {
    const {
      onLabelClick,
      selectedFilter,
      statusLabels,
      type,
    } = this.props;
    const selected = item.slug === selectedFilter || type === selectedFilter;

    return (
      <PanelGroupItem
        isSelected={selected}
        item={item}
        key={item.display_text}
        onLabelClick={onLabelClick(item)}
        statusLabels={statusLabels}
        type={type}
      />
    );
  }

  render () {
    const { groupItems } = this.props;
    const { renderGroupItem } = this;
    const baseClass = 'panel-group';

    return (
      <div className={baseClass}>
        {groupItems.map((item) => {
          return renderGroupItem(item);
        })}
      </div>
    );
  }
}

export default PanelGroup;
